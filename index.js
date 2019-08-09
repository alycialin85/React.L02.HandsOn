import React from 'react';
import ReactDOM from 'react-dom';

const stateInfo = (head1, head2, head3, state1, state2, state3, state4, pop1, pop2, pop3, pop4, cap1, cap2, cap3, cap4) => {
    return (
        <table>
            <tr>
                <th>{head1}</th>
                <th>{head2}</th>
                <th>{head3}</th>
            </tr>
            <tr>
                <td>{state1}</td>
                <td>{pop1}</td>
                <td>{cap1}</td>
            </tr>
            <tr>
                <td>{state2}</td>
                <td>{pop2}</td>
                <td>{cap2}</td>
            </tr>
            <tr>
                <td>{state3}</td>
                <td>{pop3}</td>
                <td>{cap3}</td>
            </tr>
            <tr>
                <td>{state4}</td>
                <td>{pop4}</td>
                <td>{cap4}</td>
            </tr>
        </table>
    );
}

ReactDOM.render(
    stateInfo(
        'State',
        'Population',
        'Capital',
        'Idaho',
        'Tennassee',
        'Maine',
        'Wisconsin',
        ' ',
        '6.651 million',
        '1.331 million',
        '5.779 million',
        'Boise',
        'Nashville',
        'Agusta',
        'Madison'
    ),
    document.getElementById('root')
);