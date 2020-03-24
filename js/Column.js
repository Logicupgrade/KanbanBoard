class Column
{
    constructor(columnId,columnTitle)
    {
        this.id = columnId;
        this.title = columnTitle;
        //iterations of 6
        this.currentRowCount6 = 1;
    }

    /////Maybe Add this to KanbanBoard.js as a display/view function
    updateRowCount(highestRowCount6)
    {   
        let tempAddRowcount = highestRowCount6 - currentRowCount6
        let i = 0;
        
        for(i;i<(tempAddRowcount*6);i++)
        {
            //Add row empties with ids
            this.createEmptyRow();
        }

        this.rowCount6 = highestRowCount;
    }
    createEmptyRow()
    {

        //loop through (6 times)*(rowCount)
        //give ids based on row

    }
}