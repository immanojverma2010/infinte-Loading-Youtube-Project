import _ from "lodash";
import React, { Component } from "react";
import ReactPlayer from 'react-player'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { infinite } from 'react-infinite';

import { fetchVideos } from "../../actions/actions_youtube";
import { RingLoader } from 'react-spinners';

 class VideosIndex extends Component {
   constructor(props) {
     super(props);

     this.state=  {
                elements: [],
             isInfiniteLoading: false
         };
         this.handleInfiniteLoad=this.handleInfiniteLoad.bind(this)
   }

componentDidMount(){
  this.props.fetchVideos();
}

renderVideos() {
      //  console.log("this.props.videos",this.props.videos);
  return _.map(this.state.elements, video => {

    let url = "https://www.youtube.com/watch?v="+video.id;
    console.log(url);
    return (
      <div className="list-group-item" key={video.id}>

        <ReactPlayer url={url}  width="540px"  height="300px"/>

      </div>
    );
  });
}
componentWillReceiveProps(nextProps){
  if (nextProps !== this.props){
let { elements } = this.state

elements.push(...nextProps.videos)
this.setState({elements});
  }
}
handleInfiniteLoad() {
    var that = this;
    this.setState({
        isInfiniteLoading: true
    });

    this.props.fetchVideos(this.props.nextPageToken);
    setTimeout(function() {
      //  var elemLength = that.state.elements.length,
        //    newElements = that.buildElements(elemLength, elemLength + 5);
        that.setState({
            isInfiniteLoading: false,

        });
    }, 1000);
}
elementInfiniteLoad() {
    return <div className="infinite-list-item">
      <RingLoader/>
    </div>;
}
  render() {

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/videos/new">
            Add a Post
          </Link>
        </div>
        <h3>Videos </h3>
          <Infinite elementHeight={51}
                           containerHeight={window.innerHeight}
                           infiniteLoadBeginEdgeOffset={200}
                           onInfiniteLoad={this.handleInfiniteLoad}
                           loadingSpinnerDelegate={this.elementInfiniteLoad()}
                           isInfiniteLoading={this.state.isInfiniteLoading}
                           timeScrollStateLastsForAfterUserScrolls={1000}
                           useWindowAsScrollContainer={true}
                           >
        <div className="list-group">
          {this.state.elements.length>0?
                this.renderVideos()
                :
                null
          }
        </div>
        </Infinite>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videoData.items, nextPageToken:state.videoData.nextPageToken };
}

export default connect(mapStateToProps,{ fetchVideos })(VideosIndex);
