const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//fill listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

//Loop through empties and call drag events
for(const empty of empties)
{
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragEnter',dragEnter);
    empty.addEventListener('dragLeave',dragLeave);
    empty.addEventListener('drop',dragDrop);
}

//drag functions
function dragStart()
{
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible',0);
    // console.log('start');
}

function dragEnd()
{
    this.className = 'fill';
    // console.log('end');
}

function dragOver(e)
{
    e.preventDefault();

    // console.log('over');
}

function dragEnter(e)
{
    e.preventDefault();
    this.className += ' hovered';
    // console.log('enter');
}

function dragLeave()
{
    this.className = 'empty'
    // console.log('leave');
}

function dragDrop()
{
    this.className = 'empty';
    this.append(fill); 
    // console.log('drop');
}