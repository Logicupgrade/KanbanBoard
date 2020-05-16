class Card
{
    constructor(cardId,fName,lName,cardTitle,cardDescription)
    {
        this.id = cardId;
        this.firstName =fName;
        this.lastName = lName;
        this.title = cardTitle;
        this.description = cardDescription;
        this.position = { row:-1 , column:-1 };
    }

    setPosition(newPosition)
    {
        this.position.row = newPosition.row;
        this.position.column = newPosition.column;
    }

    getPosition()
    {
        return this.position;
    }
}