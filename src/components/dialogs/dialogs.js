import React from 'react';
import classes from './dialogs.module.css';
import Message from './message/message';
import User from './user.js/user';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                <input type='search' placeholder='Search'/>
                <User name="Hanna" id='1'/>
                <User name="Ulrich" id='2' />
                <User name="Mikkel" id='3'/>
                <User name="Katarina" id='4'/>
                <User name='Johnas' id='5'/>

            </div>
            <div className={classes.dialogs__messages}>
                <Message message='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'/>
                <Message message='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' />
                <Message message='Axcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' /> 
                <Message message='At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.' />
                <Message message='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
            </div>
        </div>


    )

};

export default Dialogs;