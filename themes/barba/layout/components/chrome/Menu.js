import { Component } from 'kapla'

import { gsap } from 'gsap'

export default class extends Component {
  load() {
    const subscriber = this.subscribe('menu-trigger')

    subscriber.on('menu:open', this.open)
    subscriber.on('menu:close', this.close)

    this.delegateClick = 'a'

    // Close menu if click on overlay
    this.$refs.overlay.addEventListener('click', () => {
      this.onOverlayClick()
    })
  }

  open() {
    return gsap
      .timeline({})
      .set(this.$refs.item, {
        y: 50,
        opacity: 0,
      })
      .to(
        this.$refs.panel,
        {
          duration: 1,
          x: 0,
          ease: 'power4.inOut',
          onComplete: () => {
            this.$el.classList.add('is-open')
          },
        },
        0
      )
      .to(
        this.$refs.item,
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'power4',
          stagger: 0.05,
        },
        0.25
      )
      .then()
  }

  close() {
    return gsap
      .timeline({
        onComplete: () => {
          this.$el.classList.remove('is-open')
          console.log('Menu:overlayclick', this.$el)
        },
      })
      .to(
        this.$refs.panel,
        {
          duration: 0.5,
          x: '110%',
          ease: 'power4.inOut',
        },
        0
      )
      .then()
  }

  onOverlayClick() {
    console.log('Menu:overlayclick')
    this.emit('overlay:close')
    this.close()
  }

  onClick() {
    this.emit('link:close')
    this.close()
  }
}
