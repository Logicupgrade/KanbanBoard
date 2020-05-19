//essentailly data structure of KanbanState.txt

class KanbanBoard
{
    constructor()
    {
        this.columnCount = 3;
        this.columnIDs = [];
        this.columnPositions = [];

        this.cardCount = 0;
        this.cardIDs = [];
        this.cardPostions = [];

        this.numRows = 0;

        //row count times 6
        this.highestRowCount6 = 1;
    }

    addColumnDOM(columnTitle)
    {
        //creates new column
        // current_column = new Column(columnId,columnTitle,columnPosition);
        this.columnCount++;

        //adds column info to State
        // updateState( 1, columnId, columnTitle, columnPosition );

        //add new column to DOM
        console.log(this.columnCount);
        addColumnDisplay( this.columnCount, columnTitle, (this.columnCount-1), this.columnCount );

        //init dragndrop functionality
        initCardSlots();
    }

    //Add 6 more rows when numRows == CardCount-1

    //moveColumn-columnPosition
    //removeColumnDOM

    // createCard
    // removeCard
    // getCardPosition(cardID)
    // getCardTitle(cardID)

    //cardOrColumn: 0 = Card, 1 = Column 
    updateState( cardOrColumn, id, title, position )
    {

    }

    //**Idea(State): template States for similar projects */
}