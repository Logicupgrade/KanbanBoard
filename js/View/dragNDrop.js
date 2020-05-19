
var cardID = -1;

initCardSlots();

function initCardSlots()
{
    const fills = document.querySelectorAll('.fill');
    const empties = document.querySelectorAll('.empty');

    //Loop through fills and call drag events
    for(const fill of fills)
    {
        fill.addEventListener('dragstart',dragStart);
        fill.addEventListener('dragend',dragEnd);
    }

    //Loop through empties and call drag events
    for(const empty of empties)
    {
        empty.addEventListener('dragover',dragOver);
        empty.addEventListener('dragEnter',dragEnter);
        empty.addEventListener('dragLeave',dragLeave);
        empty.addEventListener('drop',dragDrop);
    }
}

//drag functions
function dragStart()
{
    cardID = this.id;
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible',0);
}

function dragEnd()
{
    this.className = 'fill';
}

function dragOver(e)
{
    e.preventDefault();
}

function dragEnter(e)
{
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave()
{
    this.className = 'empty'
}

function dragDrop()
{
    currentCard = document.getElementById(cardID);   
    this.className = 'empty';
    this.append(currentCard);     
}
