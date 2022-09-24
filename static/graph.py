import sqlite3
import json
import sys

# calculus id 743d54b1-18cd-46c0-a514-690ae445a412

# get roam database path
def roam_db_path():
    from os.path import expanduser
    home = expanduser("~")
    return home + '/.emacs.d/org-roam.db'

def is_uuid(mystr):
    # try:
    #     uuid.UUID(row['link_source'])
    #     return True
    # except:
    #     return False
    return mystr.count('-') == 4

# fetch the actual data from the database
conn = sqlite3.connect(roam_db_path())
conn.row_factory = sqlite3.Row
# # rows = conn.execute('select * from nodes n join links l on n.id = l.source or n.id = l.dest').fetchall()
# nodes = conn.execute('select * from nodes').fetchall()
# links = conn.execute("select * from links where type = '\"id\"'").fetchall()

nodes = {} # map node id to its object
links = []

def link_exists(source, target):
    for link in links:
        if link['source'] == source and link['target'] == target:
            return True
        if link['target'] == source and link['source'] == target:
            return True
    return False

def get_data(node_id):
    rows = conn.execute('''
    select
      n.id as node_id,
      n.file as node_file,
      n.title as node_title,
      n.level as node_level,
      l.source as link_source,
      l.dest as link_dest,
      l.type as link_type
    from nodes n
    join links l
    on l.dest = n.id
    or l.source = n.id
    where n.id = ? and type = '"id"'
    ''', ('"'+node_id+'"',)).fetchall()

    for row in rows:
        row = dict(row)
        for key,value in row.items():
            if type(value) == str:
                row[key] = value.strip('"')
        if row['node_id'] not in nodes:
            nodes[row['node_id']] = {
                'id': row['node_id'],
                'file': row['node_file'],
                'title': row['node_title'],
                'level': row['node_level']
            }
        if not link_exists(row['link_source'], row['link_dest']):
            links.append({
                'source': row['link_source'],
                'target': row['link_dest']
            })
        if row['link_source'] not in nodes:
            get_data(row['link_source'])
        if row['link_dest'] not in nodes and is_uuid(row['link_dest']):
            get_data(row['link_dest'])

# export the data to graph.json
def export_data():
    # lower() is a quick fix for an error on d3's side
    with open('graph.json', 'w+') as graph_json_file:
        graph_json_file.write(json.dumps({'links': links, 'nodes': list(nodes.values())}, indent=2).lower())

get_data(sys.argv[1])
export_data()
