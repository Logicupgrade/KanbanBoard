class KanbanBoard
{
    constructor()
    {
        this.columnCount = 0;
        this.postCount = 0;

        //row count times 6
        this.highestRowCount6 = 1;
    }

    addColumnDOM(columnId,columnTitle)
    {
        current_column = new Column(columnId,columnTitle);
    }

    //removeColumnDOM

    // createCard
    // removeCard
    // getCardPosition(cardID)
    // getCardTitle(cardID)
}