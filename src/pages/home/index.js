import React from "react";
import Status from "../../components/Status";
import Button from "../../components/Button";

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
            name: "FDBC Jakarta",
            list: null,
            keyword: ""
        };
    }

    componentDidMount(){
        this.fetchData();
    }


    fetchData = () => {
        return fetch(link).then(res => res.json()).then(res => {
            this.setState({
                list: res
            });
        });
    };

    handleLogin = () => {
        this.setState({
            isAuthenticated: true
        });
    }

    handleForm = event => {
        this.setState({
            keyword: event.target.value
        });
    }

    render(){

        const listStyle = {
            marginBottom: 20, 
            marginLeft: 300,
            marginRight: 300,
            borderBottom: "1px solid #000000"};
        const contentStyle = {
            margin:0};
        const inputSearch = {
            marginLeft: 300,
            marginRight: 300,
            marginBottom: 20,
            marginTop: 20
        }

        return(
            <div>
                <center><input onChange={this.handleForm} value={this.state.keyword} style={inputSearch}></input></center>
                {this.state.list && this.state.list.filter(article => {
                    return(article.title.toLowerCase().includes(this.state.keyword) || article.content.toLowerCase().includes(this.state.keyword));
                }).map(article => {
                    return(
                        <div key={article.key} style={listStyle}>
                            <center><strong><b>{article.title}</b></strong></center>
                            <center><p style={contentStyle}><em>{article.author}</em></p></center>
                            <p style={contentStyle}>{article.content}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}


/*const Home = props => {
    return <div>Hello {props.namaDepan} {props.namaBelakang}</div>;
};*/

export default Home;