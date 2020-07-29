import React, { Component } from 'react'

import "../index.css"

interface State {
  ref: any;
  isSticky: boolean;
}

export default class Sticky extends Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      ref: null,
      isSticky: false,
    }
  }

  componentDidMount() {
    // 吸顶元素距离页面顶部的高度
    let totalOffsetTop = 0

    window.addEventListener("scroll", () => {
      const { isSticky } = this.state

      if (window.pageYOffset > totalOffsetTop) {
        // console.log("到顶")
        if (!isSticky) {
          this.setState({
            isSticky: true
          })
        }
      } else {
        this.setState({
          isSticky: false
        })
      }
    })

    // 创建微任务处理, 吸顶元素距离页面顶部的高度
    Promise.resolve().then(() => {
      const { ref } = this.state

      totalOffsetTop = ref.offsetTop + ref.offsetParent.offsetTop
    })
  }

  getRef = (ref: any) => {
    this.setState({
      ref
    })
  }

  render() {
    const { isSticky } = this.state

    return <div className={isSticky ? "isSticky" : ""} ref={this.getRef}>
      {this.props.children}
    </div>
  }
}