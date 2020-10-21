use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Thor",
        email: "LordOfThunder@avengersmail.com",
        status: null
    },
    {
        name: "Tony Stark",
        email: "IronMan@avengersmail.com",
        status: null
    },
    {
        name: "Bruce Banner",
        email: "hulk_smash@avengersmail.com",
        status: null
    },
]);