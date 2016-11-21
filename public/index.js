//tab start
function openTab1(evt, cityName) {
    console.log(evt)
        // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTab2(evt, cityName) {
    console.log(evt)
        // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

for (var i = 1; i <= 10; i++) {
    Sortable.create(document.getElementById("tab" + i), {
        animation: 150, // ms, animation speed moving items when sorting, `0` — 
        group: "omega",
        onUpdate: function(evt /**Event*/ ) {
            var item = evt.item; // the current dragged HTMLElement
        }
    });
}

function putItemIntoTab(item) {
    $("#tab" + item.tab).append(
        '<div onclick=showDetail(' + item.id + ') class="item-container" data-id="' + item.id + '">' +
        '<img class="item-img" src="' + item.img + '" tabIndex="0" />' +
        '<div class="item-text">' + item.name + '</div>' +
        '</div>'
    );
}

function showDetail(id) {
    var item = items[id];
    console.log(id)
    $('#detail-img').attr("src", item.img);
    $('#title').html(item.name);
    $('#store').html(item.store);
    $('#price').html(item.price);
    $('#note').html(item.note);
}



var items = {
    '1': {
        id: '1',
        name: 'LativQQskirt',
        store: 'lativ',
        price: '$2000',
        note: 'yy',
        img: './s1.jpg',
        tab: 1
    },

    '18': {
        id: '18',
        name: 'Lativ skirt',
        store: 'Hangten',
        price: '$1000',
        note: 'yyYYYYY',
        img: './s2.jpg',
        tab: 1
    },

    '183': {
        id: '183',
        name: 'Lativ skirt',
        img: './s3.png',
        tab: 1
    },

    '1831': {
        id: '1831',
        name: 'Lativ skirt',
        img: './s2.jpg',
        tab: 6
    },

    '1832': {
        id: '1832',
        name: 'Lativ skirt',
        img: './Duck.jpg',
        tab: 6
    },

    '2': {
        id: '2',
        name: 'hantang skirt',
        img: './s2.jpg',
        tab: 2
    },

    '3': {
        id: '3',
        name: 'Lativ koz',
        img: './s3.png',
        tab: 3
    },

    '4': {
        id: '4',
        name: 'Lativ skirt',
        img: './Duck.jpg',
        tab: 4
    },

    '5': {
        id: '5',
        name: 'Lativ skirt',
        img: './Duck.jpg',
        tab: 5
    },
    '6': {
        id: '6',
        name: 'Lativ skirt',
        img: './s1.jpg',
        tab: 6
    },

    '7': {
        id: '7',
        name: 'hantang skirt',
        img: './s2.jpg',
        tab: 7
    },

    '8': {
        id: '8',
        name: 'Lativ koz',
        img: './s3.png',
        tab: 8
    },

    '9': {
        id: '9',
        name: 'Lativ skirt',
        img: './s1.jpg',
        tab: 9
    },

    '10': {
        id: '10',
        name: 'Lativ skirt',
        img: './s1.jpg',
        tab: 10
    },

}

for (var i in items) {
    putItemIntoTab(items[i]);
}

//tab end
