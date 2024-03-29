// function toggleButton(show) {
//     var results = document.querySelectorAll('.result');
//     results.forEach(function (result) {
//         result.style.display = 'none';
//     });

//     var result = document.getElementById('result' + show);
//     if (result.style.display === 'none') {
//         result.style.display = 'block';
//     } else {
//         result.style.display = 'none';
//     }
// }


document.querySelectorAll('.toggle-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const texts = document.querySelectorAll('.text');
        texts.forEach((text, i) => {
            if (i === index) {
                if (text.style.display === 'none' || text.style.display === '') {
                    text.style.display = 'block';
                } else {
                    text.style.display = 'none';
                }
            } else {
                text.style.display = 'none';
            }
        });
    });
});



const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.querySelector('.icon').classList.remove('fa-angles-up');
        this.querySelector('.icon').classList.add('fa-angles-down');
      } else {
        // Tüm panelleri kapat
        for (let j = 0; j < acc.length; j++) {
          const otherPanel = acc[j].nextElementSibling;
          if (otherPanel !== panel) {
            otherPanel.style.maxHeight = null;
            acc[j].classList.remove("active");
            acc[j].querySelector('.icon').classList.remove('fa-angles-up');
            acc[j].querySelector('.icon').classList.add('fa-angles-down');
          }
        }
        // Tıklanan paneli aç
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.classList.toggle("active");
        this.querySelector('.icon').classList.remove('fa-angles-down');
        this.querySelector('.icon').classList.add('fa-angles-up');
      } 
    });
  }