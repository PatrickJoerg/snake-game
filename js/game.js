
    // key inputs
        document.onkeydown = function() {
            switch (e.keyCode) {
              case 38: serpent.direction('up'); break;
              case 40: serpent.direction('down'); break;
              case 37: serpent.direction('left'); break;
              case 39: serpent.direction('right'); break;
            }};