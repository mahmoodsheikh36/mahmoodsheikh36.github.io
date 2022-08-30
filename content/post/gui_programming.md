+++
title = "programming in C#"
author = ["mahmood"]
description = "gui programming in C#"
date = 2022-07-16T21:24:00+03:00
draft = false
+++

<p style="height:0px; display: none;">
  \(\DeclareMathOperator{\spn}{span}\)
  \(\DeclareMathOperator{\dom}{domain}\)
  \(\DeclareMathOperator{\ran}{range}\)
  \(\DeclareMathOperator{\rng}{range}\)
  \(\DeclareMathOperator{\img}{Im}\)
  \(\DeclareMathOperator{\adj}{adj}\)
  \(\newcommand\dif[1]{\:\textrm{d}#1}\)
  \(\DeclarePairedDelimiter\ceil{\lceil}{\rceil}\)
  \(\DeclarePairedDelimiter\floor{\lfloor}{\rfloor}\)
</p>

<style>
.lemma, .proof, .entailment, .definition, .note, .my_example, .characteristic, .assumption, .question, .subquestion, .answer, .step {
  border-radius: 10px;
  border-style: groove;
  border-width: 3px;
}
.lemma:before, .proof:before, .entailment:before, .definition:before, .note:before, .my_example:before, .characteristic:before, .assumption:before, .question:before, .subquestion:before, .answer:before, .step:before {
  background-color: #bbb;
  position: relative;
  border-radius: 10px;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 1px;
  padding-bottom: 1px;
  border: 1px solid black;
}
.lemma {
  background-color: beige;
}
.proof {
  background-color: moccasin;
}
.entailment {
  background-color: lightsteelblue;
}
.lemma:before {
  content: "lemma:";
}
.proof:before {
  content: "proof:";
}
.entailment:before {
  content: "entailment (logical consequence):";
}
.note {
  background-color: blanchedalmond;
}
.note:before {
  /* content: url(/note.png) "note:"; */
  content: "note:";
}
.my_example {
  background-color: #e8cfc8; 
}
.my_example:before {
  content: "example:";
}
p {
  margin: 0px;
  padding: 0px;
}
img {
   display: block;
   margin-left: auto;
   margin-right: auto;
}
.hide {
  display: none;
}
.definition {
  background-color: snow;
}
.definition:before {
  content: "definition:";
}
.characteristic {
  background-color: #dfdada;
}
.characteristic:before {
  content: "characteristic:";
}
.assumption {
  background-color: #65ad98;
}
.question {
  background-color: #e1c6c6;
}
.question:before {
  content: "question:";
}
.subquestion {
  background-color: #e5e2d8;
}
.subquestion:before {
  content: "subquestion:";
}
.answer {
  background-color: #beabc5;
}
.answer:before {
  content: "answer:";
}
.step {
  background-color: #b4d3ad;
}
.step:before {
  content: "step:";
}
</style>

<!-- mathjax -->
<script>
// auto load modules like cancel
window.MathJax = {
  loader: {load: ['[tex]/autoload', '[tex]/mathtools', '[tex]/physics']},
  tex: {
    packages: {'[+]': ['autoload', 'mathtools', 'physics']}
  }
};
/* since i've configured org mode to insert a new line after every line i need to get rid of those that mess up my html */
function removeNewlineAfterDisplayMath() {
    elems = document.querySelectorAll('mjx-container')
    for (i = 0; i < elems.length; ++i) {
        elem = elems[i]
        nextElem = elem.nextElementSibling
        if (nextElem !== null && nextElem.tagName === 'BR')
            nextElem.remove()
    }
}
window.onload = function() {
  removeNewlineAfterDisplayMath()
}
</script>
<script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>

this document contains my notes on gui programming in C# <br/>


## <span class="section-num">1</span> C# in emacs' org-mode {#c-in-emacs-org-mode}

the following code allows running C# code in org-babel, given you have mono installed <br/>

```emacs-lisp
(require 'ob)
(require 'csharp-mode)

(add-to-list 'org-babel-tangle-lang-exts '("csharp" . "cs"))

(defvar org-babel-default-header-args:csharp '())

(defun ob-csharp--build-script-run-command (path)
  "Create run command according to the PATH."
  (message path)
  (format "csc %s -r:System.Windows.Forms.dll -r:System.Drawing.dll >/dev/null; mono $(basename %s); rm *.exe" path (concat path ".exe")))

(defun org-babel-execute:csharp (body params)
  (let* ((processed-params (org-babel-process-params params))
         (src-temp (org-babel-temp-file "csharp-src-")))
    (with-temp-file src-temp (insert body))
    (let ((results (org-babel-eval (ob-csharp--build-script-run-command src-temp) "")))
      (org-babel-reassemble-table
       (org-babel-result-cond (cdr (assoc :result-params params))
         (org-babel-read results)
         (let ((tmp-file (org-babel-temp-file "c-")))
           (with-temp-file tmp-file (insert results))
           (org-babel-import-elisp-from-file tmp-file)))
       (org-babel-pick-name
        (cdr (assoc :colname-names params)) (cdr (assoc :colnames params)))
       (org-babel-pick-name
        (cdr (assoc :rowname-names params)) (cdr (assoc :rownames params)))))))

(provide 'ob-csharp)
```


## <span class="section-num">2</span> C# {#c}


### <span class="section-num">2.1</span> Random {#random}

```csharp
Random rnd = new Random();
int n = rnd.Next(256); // random number from 0-255
```


### <span class="section-num">2.2</span> Timer {#timer}

```csharp
int num = 0;
Timer timer = new Timer();
timer.Interval = 10; // 10 milliseconds
timer.Tick += TimerTick;
timer.Start();

// note that the timer will run the TimerTick method asynchronously
void TimerTick() {
  num++;
  Console.WriteLine(num);
  if (num == 100000)
    timer.Stop();
}
```


### <span class="section-num">2.3</span> Delegate {#delegate}

a **delegate** is basically a class of what we call in [javascript]({{< relref "20220716212509-javascript.md" >}}) a callback function <br/>

```csharp
public delegate void MyDelegate(object sender, EventArgs e);
public event MyDelegate callback;

void HandleClick(object sender, EventArgs e) {
  this.callback(sender, e);
}
```


### <span class="section-num">2.4</span> multithreading {#multithreading}

```csharp
// constructor's boolean determines whether the event happens once when created
AutoResetEvent e = new AutoResetEvent(false);
Thread t = new Thread(ThreadFunction, 10, "hello");
t.Start();

void ThreadFunction(int num, string str) {
  Console.WriteLine(str, " ", num);
}
```


### <span class="section-num">2.5</span> Windows Forms {#windows-forms}


#### <span class="section-num">2.5.1</span> Button {#button}

```csharp
class MyForm : Form {
  void CreateButton() {
    Button button = new Button();

    // setting size can be done using one of these 2 ways:
    button.Width = 40; button.Height = 50;
    button.Size = new Size(40, 50);

    // setting position can be done in one of these 2 ways:
    button.Left = 30; button.Top = 20;
    button.Location = new Point(30, 20); // button.Location.X,button.Location.Y

    // callback for when the function is clicked
    button.Click += HandleClick;

    button.Text = "0";
    button.BackColor = Color.Red;
    button.Visible = true; // true by default
    this.Controls.Add(button); // add button to the form
  }

  void HandleClick(Object sender, EventArgs e) {
    Button btn = (Button)sender;
    btn.Text = (int.Parse(btn.Text) + 1).ToString();
  }
}
```


#### <span class="section-num">2.5.2</span> Label {#label}

```csharp
Label l = new Label();
l.Size = new Size(32, 32);
l.BackColor = Color.White;
l.Location = new Point(20, 20);
```


#### <span class="section-num">2.5.3</span> PictureBox {#picturebox}

see [UserControl](#usercontrol) below <br/>


#### <span class="section-num">2.5.4</span> UserControl {#usercontrol}

like a div, contains other types of Controls <br/>

```csharp
class MyUserControl : UserControl {
  private PictureBox[] myControls = new PictureBox[20];

  public MyUserControl() {
    InitializeComponent();
    int curX = 2;
    for (int i = 0; i < this.myControls.Length; ++i) {
      this.myControls[i] = new PictureBox();
      this.myControls[i].Image = new PictureBox("<path_to_image>");
      this.myControls[i].Location = new Point(curX, 5);
      this.myControls[i].Size = new Size(20, 20);
      this.myControls[i].SizeMode = PictureBoxSizeMode.StretchImage;
      this.myControls[i].Click += OnClick;
      curX += 2 + this.myControls[i].Size.Width;
      this.Controls.Add(this.myControls[i]);
    }
  }

  void OnClick(object sender, EventArgs e) {
    PictureBox p = (PictureBox)sender;
  }
}
```


#### <span class="section-num">2.5.5</span> cloning a Control {#cloning-a-control}

im not yet aware of any way to copy the properties of a Control to another, so i do it manually <br/>

```csharp
Label l1 = new Label("hello");
Label l2 = new Label("hey");

// copy properties of l2 into l1, to make l2 look like l1
l1.Size = l2.Size;
l1.Text = l2.Text;
l1.Image = l2.Image;

// note that the following wouldnt work (it would but the GUI wont update the properties properly)
l1 = l2;
```


### <span class="section-num">2.6</span> Remoting {#remoting}


#### <span class="section-num">2.6.1</span> SingleTon {#singleton}

-   a single server object serves all clients <br/>
-   the lifetime of a server object is the lifetime of the server <br/>
-   the server object can store data for its entire lifetime <br/>


#### <span class="section-num">2.6.2</span> SingleCall {#singlecall}

-   every server object belongs to a single client <br/>
-   the lifetime of a server object is the time it takes to execute the method <br/>
-   every client request is handled individually <br/>
-   every server object gets destroyed after the clients request is done <br/>


#### <span class="section-num">2.6.3</span> Factor {#factor}


#### <span class="section-num">2.6.4</span> Serialization {#serialization}

just dont fucking name your Serializable classes `Entity`, this gave me hours of headaches.. fuck im so frustrated i fucking despise C# <br/>