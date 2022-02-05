
/*
const cursor = document.querySelector('.cursor');

document.addEventListener ("mousemove", (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

document.addEventListener ('click', () => {
    cursor.classList.add(".cursor-hover");
    setTimeout(() => {
        cursor.classList.remove(".cursor-hover");
    }, 500)
})*/

// Cursor Effects
var mouseOverVideo = false;
var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
	cursorType: 'default',
	cursorColor: '',
    $dot: document.querySelector('.cursor-dot'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        
        this.setupEventListeners();
		this.$dot.style.transform = 'translate(-50%, -50%) scale(0.99)';
    },

    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
		
		
        document.querySelectorAll('a,button,.burger').forEach(function(el) {
            el.addEventListener('mouseover', function(e) {
				// Set Linktype (for example Burger, etc.)
				
				self.cursorEnlarged = true;
				
				/*
				if (el.hasAttribute("data-linktype")) {
					self.cursorType = el.dataset.linktype;
				} else if (el.classList.contains("slick-next")) {
					self.cursorType = 'arrow';
				} else if (el.classList.contains("slick-prev")) {
					self.cursorType = 'arrowleft';
				} else if (el.classList.contains("section__enjoyed")) {
					self.cursorType = 'default';
					self.cursorEnlarged = false;
				} else {
					self.cursorType = 'arrow';
				}
				
				if (!el.hasAttribute("data-linkcolor")) {
					self.cursorColor = '';
				} else {
					self.cursorColor = el.dataset.linkcolor;
				}
				
				*/
                
                self.toggleCursorSize();
				//console.log(el.dataset.linktype);
				
            });
            el.addEventListener('mouseout', function() {
				
				
                self.cursorEnlarged = false;
                self.toggleCursorSize();
				setTimeout(function(){
					self.cursorType = 'default';
					self.cursorColor = '';
					$('.cursor-dot').attr('data-linkcolor','');
				}, 100);
            });
        });
        
  	    
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();


            // Position the dot
            self.endX = e.clientX;
            self.endY = e.clientY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
			
        });
		
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
			
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
        });
    },
    
    
    toggleCursorSize: function() {
        var self = this;
        
		//console.log(self.cursorType);
		
		
        if (self.cursorEnlarged) {
			// Different Actions for different LinkTypes
			
			self.$dot.setAttribute('data-linktype', self.cursorType);
			self.$dot.setAttribute('data-linkcolor', self.cursorColor);
			//self.$dot.setAttribute('data-onlylinkcolor', self.cursorOnlyColor);
			self.$dot.style.transform = 'translate(-50%, -50%) scale(0.99)';
			self.$dot.style.borderRadius = '50%';
			
			

        } else {
			self.$dot.removeAttribute('data-linktype');
			self.$dot.removeAttribute('data-linkcolor');
			
			self.$dot.setAttribute('data-linkcolor', self.cursorColor);
			//self.$dot.removeAttribute('data-onlylinkcolor');
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.99)';
			self.$dot.style.borderRadius = '0%';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
        }
    }
}

jQuery(document).ready(function($) {
	cursor.init();
});