/*
    The rating component consists of 5 stars. Each star is represented by a span element.
    The component should render to this HTML code:

    <div id='rating'>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
    </div>

    When a span element is clicked, the active class should be added to that span element and
    to all span elements before it.  Also, the active class should be removed from all span
    elements after it, if there are any.

    For example, after the third span element has been clicked, the HTML code should look like this:

    <div id='rating'>
        <span class="active">*</span>
        <span class="active">*</span>
        <span class="active">*</span>
        <span>*</span>
        <span>*</span>
    </div>

    Complete the Rating component so that it implements the logic of the HTML widget.
*/

//React is loaded and is available as React and ReactDOM
//imports should NOT be used

class Rating extends React.Component {
    state = {
       activeIndex: 0
    }
    spanElts = document.querySelectorAll("span");

     findElementIdx(eventTarget) {
        for (let i = 0; i < spanElts.length; i++) {
          if (spanElts[i] === eventTarget) {
            return i;
          }
        }
      }

      handleOnClick(e) {
         let idx = this.findElementIdx(e)
         this.setState({activeIndex: idx});
      }

    render() {
        <>
            { this.activeIndex >= 0 ? <span onClick='handleOnClick'>*</span> : null }
            { this.activeIndex >= 1 ? <span onClick='handleOnClick'>*</span> : null }
            { this.activeIndex >= 2 ? <span onClick='handleOnClick'>*</span> : null }
            { this.activeIndex >= 3 ? <span onClick='handleOnClick'>*</span> : null }
            { this.activeIndex >= 4 ? <span onClick='handleOnClick'>*</span> : null }
            { this.activeIndex === 5 ? <span onClick='handleOnClick'>*</span> : null }
        </>

    }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Rating />, rootElement);
document.querySelectorAll("span")[2].click();
console.log(document.getElementById("rating").outerHTML);

//My code just to manipulate the DOM:
    let spanElts = document.querySelectorAll("span");

    function findElement(eventTarget) {
      let myElts = document.querySelectorAll("span");
      for (let i = 0; i < spanElts.length; i++) {
        if (spanElts[i] === eventTarget) {
          return i;
        }
      }
    }
    for (const sp of spanElts) {
      sp.addEventListener('click', function(event) {
        var index = findElement(event.target);

        for (let i=0; i < spanElts.length;i++) {
          if (i <= index) {
            spanElts[i].classList.add("active");
          } else {
            spanElts[i].classList.remove("active");
          }
        }
        // for (let j = 0; j < spanElts.length; j++) {
        //   console.log("spanElts[", j, "]:  ", spanElts[j]);
        // }
      });
    }
