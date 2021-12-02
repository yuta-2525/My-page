'use strict';
{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');
    const closeSub = document.getElementById('closeSub');
    const closeSub1 = document.getElementById('closeSub1');
    const closeSub2 = document.getElementById('closeSub2');
    const closeSub3 = document.getElementById('closeSub3');

    function remove() {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    }

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
        btn.style.display = 'none';
    });

    close.addEventListener('click', () => {
        // overlay.classList.remove('show');
        // open.classList.remove('hide');
        btn.style.display = 'btn';
        remove();
    });
    closeSub.addEventListener('click', () => {
        remove();
    });
    closeSub1.addEventListener('click', () => {
        remove();
    });
    closeSub2.addEventListener('click', () => {
        remove();
    });
    closeSub3.addEventListener('click', () => {
        remove();
    });
}
    //ページ内のaタグを取得
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

    //ページ内リンクひとつひとつにクリックイベントを付与
    anchorLinksArr.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetID = link.hash;
            const targetElement = document.querySelector(targetID);
            const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;

            window.scrollTo({
                top: targetOffsetTop,
                behavior: "smooth"
            });
        });
    });





    let TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        let that = this;
        let delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        let elements = document.getElementsByClassName('txt-rotate');
        for (let i=0; i<elements.length; i++) {
          let toRotate = elements[i].getAttribute('data-rotate');
          let period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
      };


      const topBtn = document.getElementById('top-btn');
      const change = document.getElementById('section-title');
      const btn = document.getElementById('animate-button');
      const formBtn = document.getElementById('form-btn');

      topBtn.addEventListener('click', () => {
        change.textContent = 'Thanks for watching';
        change.classList.add('happy');
      });

      btn.addEventListener('click', () => {
        change.classList.remove('happy');
        change.textContent = 'YutaLab!'
        console.log('ok');
      });

      formBtn.addEventListener('click', () => {
          alert('入力内容が送信されました');
      });