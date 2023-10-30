import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.asin,
        {
          headers: {
            Authorization: 'Bearer inserisci-qui-il-tuo-token',
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments: comments, isLoading: false, isError: false })
      } else {
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}

componentDidUpdate(prevProps,prevState){
  if(prevProps.AddComment.asin !== this.AddComment.asin){
    fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNzMwYmY2ZTNkZDAwMTQ5NWU0OGQiLCJpYXQiOjE2OTg2NzYyMjUsImV4cCI6MTY5OTg4NTgyNX0.wzXGDMXBlj3gDm4Phwh18EDJsFhnRFsup1yiMaY8UM0"
}
})

  }
  
}

export default CommentArea
