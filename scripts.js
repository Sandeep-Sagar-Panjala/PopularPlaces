$(document).ready(function() {
    // Sample data of popular places
    const places = [
        { name: "Grand Canyon", description: "One of the most breathtaking natural wonders in the world." },
        { name: "Statue of Liberty", description: "Iconic symbol of freedom and democracy located in New York Harbor." },
        { name: "Yellowstone National Park", description: "First national park in the world, known for its geothermal features and wildlife." }
    ];

    // Populate places
    places.forEach(function(place) {
        $('#places-container').append(`
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${place.name}</h5>
                        <p class="card-text">${place.description}</p>
                    </div>
                </div>
            </div>
        `);
    });
});
