import React from 'react';

class GalleryModal extends React.Component {
  state = {
    imgPrefix: this.props.img,
    currentImg: 1,
    pagination: []
  };


  onclickHandle = (event) =>{
    this.setState({
      currentImg: event.target.innerText
    })
  }

  componentDidMount(){
    for(let i = this.state.currentImg; i <= this.props.imgCounter; i++){
      console.log(i)
      this.setState((prevState) => {
        return {
          pagination: [...prevState.pagination, i]
        }
      })
    }
  }

  render() {
    const pageNumber = this.state.pagination.map((number, key) => {
      return <span onClick={this.onclickHandle} key={key}>{number}</span>}
      )
    return (
      <div className="gallery-modal">
        <div className="gallery-content">
        <div className="gallery-header">
          <span onClick={() => this.props.setGallery(false)}>&times;</span>
        </div>
        <div className="slides">
        <img
            src={`/images/${this.state.imgPrefix}_${this.state.currentImg}.jpg`}
            alt={this.props.title}
          />
        </div>
        <div className="pagination">
          {pageNumber}
        </div>
        </div>

        {/* <div className="gallery-header">
          <span onClick={() => this.props.setGallery(false)}>&times;</span>
        </div>
        <div className="gallery">
          <img
            src={`/images/${this.state.imgPrefix}_${this.state.currentImg}.jpg`}
          />
          <div className="pagination-buttons">
            <button onClick={this.handleOnClickSubtract} className="prev">
              Prev
            </button>
            <button onClick={this.handleOnClickAdd} className="next">
              Next
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default GalleryModal;
