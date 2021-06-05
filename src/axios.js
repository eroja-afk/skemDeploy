import axios from 'axios';
import React from 'react';

export default class DataList extends React.Component {
    state = {
        datas: []
    };

    componentDidMount(){
        axios.get('https://skem-api.vercel.app/api/getAllTargets').then(res => {
            let details = [];

            for (var i = 0; i < Object.keys(res.data.message).length; i++) {
                details.push({ name: i, value: res.data.message[i] })
            }
            console.log("fjhdhfjdhfj" + i);
            console.log(details);
            this.setState({ datas: details});
        });
    }

    render() {
        return (
            <tr>
                {this.state.datas.map(data => <td>{data.value.author}</td>)}
            </tr>
        )
    }

}