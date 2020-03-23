class KanbanBoard
{
    constructor()
    {
        this.columnCount = 0;
        this.postCount = 0;
    }

    addColumnToDOM(columnPosition)
    {
        current_column = new Column(columnPosition);
    }
}