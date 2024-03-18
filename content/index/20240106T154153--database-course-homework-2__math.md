+++
title = "database course homework 2"
author = ["mahmood"]
date = 2024-01-06T15:41:00+02:00
tags = ["math"]
draft = false
+++

<div class="note">

the notation i used is more similar to the one in [elmasri's book](20231209T121607--elmasri-fundamentals-of-database-systems__book_cs_math.org) than the one used in practice lectures, but it shouldnt matter (hopefully to you too). <br/>

</div>

using the same schema as in [homework 1](20231209T093627--database-course-homework-1__math.org) <br/>

<div class="problem">

write the following queries in [relational algebra](20231212T163612--relational-algebra__math.org) <br/>

<div class="subproblem">

retrieve id and phone number of the customers whose first name is "almog" <br/>

</div>

<div class="solution">

relational algera version <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/bd32f38af24.svg" alt="\begin{equation}
  \pi_{\text{id, phone\_number}}(\sigma_{\text{first\_name = }almog}(\text{customer}))
\end{equation}
" style="height: 1.5819em; vertical-align: -0.3567em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

sql version <br/>

```sql
SELECT id, phone_number FROM customer WHERE first_name = "almog"
```

</div>

<div class="subproblem">

retrieve the id and location (city, street, and house number) of the customers that have cars <br/>

</div>

<div class="solution">

we use a [semi join](20240110T195820--semi-join__math.org) and then a [project operation](20240109T111349--project-operation__math.org) <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/e1707a2ae10.svg" alt="\begin{equation}
  \pi_{\text{id, hometown, street, house\_number}}\left(\text{customer} \operatorname*{\ltimes}_{\substack{\text{id } = \text{ customer\_id}\\ \text{start\_date } \le\ CURRENT\_TIME\ \le \text{ end\_date}}} \text{car\_owner}\right)
\end{equation}
" style="height: 3.8549em; vertical-align: -0.5392em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

assuming the customer id attribute has the same name in all relations. <br/>
sql version: <br/>

```sql
SELECT id, hometown, street, house_number
FROM   customer c
WHERE  c.id IN (SELECT customer_id
                FROM   car_owner co
                WHERE  c.id = co.customer_id
                AND    ((CURRENT_DATE() < co.end_date) OR co.end_date IS NULL)
                AND    CURRENT_DATE > start_date)
```

</div>

<div class="subproblem">

retrieve the id and customer name (first and last name) of customers that have more than 2 cars <br/>

</div>

<div class="solution">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/dd80d561651.svg" alt="\begin{align}
  &amp;amp;TEMP \gets \left(\text{customer} \Join_{\text{id = customer\_id}} \left(\sigma_{\text{start\_date } \le\ CURRENT\_DATE\ \le \text{ end\_date}}\text{car\_owner}\right)\right)\\
  &amp;amp;\pi_{\text{id, first\_name+' '+last\_name}}\left(\sigma_{\text{COUNT\_car\_number}\ &amp;gt;\ 2}\left(_{\text{id, first\_name, last\_name}}\mathcal{G}_{COUNT \text{ car\_number}}(TEMP)\right)\right)
\end{align}
" style="height: 3.0972em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

retrieve the ids and customer names of all customers and the numbers of cars that belong to them, if the end date of the car ownership has ended it shouldnt be retrieved. <br/>

</div>

<div class="solution">

i assume the goal is to retrieve the entries of the car numbers and not the number of cars, hopefully thats what you meant because the original text is ambiguous. <br/>
an [outer join](20240110T202306--outer-join__math.org) is needed here to make sure all customers are considered even if they dont own cars <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/0254da76e7d.svg" alt="\begin{equation}
  \sigma_{\text{id, car\_number}}\text{customer} \leftouterjoin_{\text{id } = \text{ customer\_id}} \sigma_{\text{start\_date } \le\ CURRENT\_DATE\ \le \text{ end\_date}}(\text{car\_owner})
\end{equation}
" style="height: 1.5486em; vertical-align: -0.3234em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

retrieve the garage name, car number, maintenace date and maintenance type in which the part "plug" or "gear oil" was replaced <br/>

</div>

<div class="solution">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/addb8152ac0.svg" alt="\begin{align}
  &amp;amp;v\_replaced\_part \gets \sigma_{\text{part\_name=&quot;gear oil&quot; } \lor \text{ part\_name = &quot;plug&quot;}}\\
  &amp;amp;v\_car\_maintenance \gets v\_replaced\_part * car\_maintenance\\
  &amp;amp;v\_garage \gets garage * v\_car\_maintenance\\
  &amp;amp;\sigma_{\text{car\_number, garage\_name, maintenance\_date, maintenance\_type}}(v\_garage)
\end{align}
" style="height: 6.0372em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

retrieve car number, car type, car manufacturing company, and production date of cars that have gone through every kind of maintenance <br/>

</div>

<div class="solution">

this is the naive solution, i cant think of a better one <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/dab30e83531.svg" alt="\begin{align}
  &amp;amp;v\_types \gets \sigma_{\text{maintenance\_type}}(\text{car\_maintenance})\\
  &amp;amp;v\_car\_maintenance \gets \text{car} \Join_{\text{number = car\_number}}\left(\operatorname*{\Join}_{\substack{type \in v\_types}} \sigma_{\text{maintenance\_type = }type}(\text{car\_maintenance})\right) \label{database-homework2-eq1}\\
  &amp;amp;\pi_{\text{car\_number, car\_type, company, production\_year}}\left(v\_car\_maintenance \Join_{\text{car\_number = number}} \text{car}\right)
\end{align}
" style="height: 5.9392em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

retrieve the first name, last name and phone number of the customers that have garages in their local town <br/>

</div>

<div class="solution">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/9cc41cf6622.svg" alt="\begin{equation}
  \pi_{\text{first\_name, last\_name, phone\_number}}(\text{customer} \Join_{\text{hometown=town}} \text{garage})
\end{equation}
" style="height: 1.5819em; vertical-align: -0.3567em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

retrieve the name of the garage that has done the most maintenances <br/>

</div>

<div class="solution">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/a3d05869554.svg" alt="\begin{align}
  &amp;amp;v\_maintenance \gets \pi_{\text{garage\_name, num\_of\_maintenances}}\left(\prescript{}{\text{garage\_name}}{\mathcal{G}}_{COUNT \text{ num\_of\_maintenances}}(\text{car\_maintenance})\right)\\
  &amp;amp;\pi_{\text{garage\_name}}\left(\prescript{}{\text{garage\_name}}{\mathcal{G}}_{MAX \text{ num\_of\_maintenances}}(v\_maintenance)\right)
\end{align}
" style="height: 3.3105em; vertical-align: -0.4547em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

retrieve the details of customers (first name, last name and phone number), the number and manufacturing company name of the motorcycle for the customers that have a motorcycle and have done maintenance in tel aviv <br/>

</div>

<div class="solution">

<div class="equation-container">
<span class="equation">
<img src="/ltximg/ea1279e2909.svg" alt="\begin{align}
  &amp;amp;v\_cust1 \gets \text{car\_owner} * \sigma_{\text{town='tel aviv'}}(\text{garage} * \text{car\_maintenance})\\
  &amp;amp;v\_cust2 \gets \rho_{\text{customer\_id, motorcycle\_number, motorcycle\_company}}\left(\pi_{\text{customer\_id, car\_number}}\left(\text{car\_owner} * \sigma_{\text{car\_type='motorcycle'}}(\text{car})\right)\right)\\
  &amp;amp;\pi_{\text{first\_name+' '+last\_name, phone\_number, motorcycle\_number, motorcycle\_company}}\left(\text{customer} \Join_{\text{id=customer\_id}} (v\_cust1 * v\_cust2)\right)
\end{align}
" style="height: 4.6750em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

<div class="subproblem">

retrieve the id, first name and last name of all customers. in addition add a field called "ownership" with the following value: <br/>

1.  for a customer with no car, "no car" <br/>
2.  for a customer with a car that they dont own, "old owner" (hint: there is an end date in the ownership table) <br/>
3.  for a customer with a car that they own, "car owner" (there is no end date in the owners table). <br/>

</div>

<div class="solution">

we use [outer join](20240110T202306--outer-join__math.org)s <br/>


<div class="equation-container">
<span class="equation">
<img src="/ltximg/c527641525f.svg" alt="\begin{align}
  &amp;amp;nocar \gets \rho_{\begin{array}{l}
    \text{first\_name}\\
    \text{last\_name}\\
    \text{id}\\
    \text{ownership}
  \end{array}}
    \pi_{\begin{array}{l}
      \text{first\_name}\\
      \text{last\_name}\\
      \text{id}\\
      \text{'no car'}
    \end{array}}
    (\sigma_{\text{car\_number}= NULL}(\text{customer} \leftouterjoin_{\text{id=customer\_id}} \text{car\_owner}))\\
  &amp;amp;oldcar \gets \rho_{\begin{array}{l}
    \text{first\_name}\\
    \text{last\_name}\\
    \text{id}\\
    \text{ownership}
  \end{array}}
    \pi_{\begin{array}{l}
      \text{first\_name}\\
      \text{last\_name}\\
      \text{id}\\
      \text{'old car'}
    \end{array}}
    (\sigma_{\text{end\_date}\le CURRENT\_TIME}(\text{customer} \leftouterjoin_{\text{id=customer\_id}} \text{car\_owner}))\\
  &amp;amp;presentcar \gets \rho_{\begin{array}{l}
    \text{first\_name}\\
    \text{last\_name}\\
    \text{id}\\
    \text{ownership}
  \end{array}}
    \pi_{\begin{array}{l}
      \text{first\_name}\\
      \text{last\_name}\\
      \text{id}\\
      \text{'car owner'}
    \end{array}}
    (\sigma_{\text{start\_date}\le CURRENT\_TIME &amp;lt; \text{ end\_date}}(\text{customer} \leftouterjoin_{\text{id=customer\_id}} \text{car\_owner}))\\
  &amp;amp;nocar \cup oldcar \cup presentcar
\end{align}
" style="height: 18.3721em; vertical-align: -0.4020em; display: inline-block" class="org-latex org-latex-inline" />
</span>
</div>

</div>

</div>

