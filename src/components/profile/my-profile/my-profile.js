import React from 'react';
import Preloader from '../../preloader/preloader';
import classes from "./my-profile.module.css";


const MyProfile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.my__profile}>
            <p>{props.profile.fullName}</p>

            <img src={props.profile.photos.large} width="250" height="300" />
            <div>
                <ul>
                    <li>
                        <span>Обо мне</span>
                        <span>{props.profile.aboutMe}</span>
                    </li>
                    <li className={classes.job}>
                        <div >Работа</div>
                        <div>{props.profile.lookingForAJob === true ? <div>В поиске:<img src="https://lh3.googleusercontent.com/proxy/itiwmAPlwQruV4hPvm70KkkIk93yoPMmdfn1JuOcFGNuO-58D7KN2Q9iHESHiNIFsN_yLMme4LXb8QMz4rYxXjJ5e5Gs8F2Q8kUhyd9OAqRN1NU-7dQFuNqIwdnnN-TSgS_Zo4P8gPiQy_5mlrCJvpDJwB_r7YGcYb43D6GiqvEKpOU_grI2sgKuFfOJKi-7Oyn5MToUpfHJeWA-zIGWfA" width="20" height="20" /></div> : null} </div>
                        <span>{props.profile.lookingForAJob === true ? <div>{props.profile.lookingForAJobDescription}</div> : null}</span>
                    </li>
                    <li>
                        <ul className={classes.contacts}>Контакты
                        <li className={classes.vk}>
                                <a href="{props.profile.contacts.vk}">
                                    <img src="data:image/png;base64,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" />
                                </a>
                            </li>
                            <li className={classes.instagram}>
                                <a href='{props.profile.contacts.instagram}'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqH5TE0oyoxEASFnVZ7kN0slOSwQErpv7QFA&usqp=CAU' />
                                </a>
                            </li>
                            <li className={classes.github}>
                                <a href='{props.profile.contacts.github}'>
                                    <img src="https://img.icons8.com/material/452/github.png" />
                                </a>
                            </li>
                            <li className={classes.twitter}>
                                <a href='{props.profile.contacts.twitter}'>
                                    <img src="https://s1.iconbird.com/ico/2013/6/271/w513h5131371296393twitter.png" />
                                </a>
                            </li>
                            <li className={classes.youtube}>
                                <a href='{props.profile.contacts.youtube}'
                                ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX////kKyb///7kJyHnSEXiAADjHhfjGBDjHhjuiYfkJR/jGxTjIRv+9vbjFQzujYv97+7++fn3yMfyq6rvlJL75eTtf33qamf6397oUU31ubjxoqD40dDqZWLlNzPlMCvvl5X51dTxqqjseHX1vbvuhYPpWlfoTkrmQDzrcG34ysnrc3H0urjoXVr86ujqZ2MdjOy4AAAGKUlEQVR4nO2d4XaqOhBGsQgoKKKAUlFERavtqX3/t7sJrbe1VVszA4a1vv2zyx7PbiCZSSaJYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFf6hzhZzkajYjqdhmG4StM0z/MoGpR0T3n/YRRFeS4+txKfF79VFKPnZRIf+vdWKekHQTwrwjQarN+27cz1rQ98iVPiCewPOqccfyw/4pUfLn/v+K/4brZ7fFt3ozQsZnEQ1Ok8TGZhNJ5sdy1H/EeEhN1zXdNscWOartvrCHsh7bR228k4Cp+Tyk3703lmW74npdidrvoKXc+x7GweVimZrMXTU6/ZT1Pf2icV+QVjq3dXuyM9a32oQrBYePdW+x+7NeUX7Fr3fTxPMa0xt+Dev7fUN/z5kFXwRTfBVsuZcAp29RMUrcj4oP6z7m1zFivkEgx0bEGJxTVovHTurXKBHtOruNS1CcWrOGMxnOgRyZzDfeUQjPVtQvEmcoSoqXNvjSt4EYNhW6do7Tvmgi4Y6DkWHrFismGh82soelN6khHpkzOdo7MhG27de0tcxWyTDRc6dzQCk5pEJbpGbEc86og407ujEV3NiGi4Uh7vTZtT5CJeTjQcqz6lZjs36+iGe2ui4Vw17BadXDCwqm9HcvD9pNqVmu0HOcXqV91TmW1aZxpkFEPhGK+9ipOvRUAyjJWboDR8EI7JxKo0aHBokWmiHHd/GErH5WuVjsQUcUQ3lI6zR78yR78gGU6VB/wvhtJx9FjVqoBDm1NMlYe0E0Ph+FDsqnEkDvkD5QHtm6Foxofpwq/A0R6QDDfUvvTE0VhlDrsjMUNcKw9mPw2lYz9tcU9s9V5IhhPlLvCcYekY+bzhqvtGMlTP8M8blo4DhzNcdbckwyd2Q+l42HT4wlXz6YEgONwpdwyXDctQbs1W9WDuKKH3UDnwvmpYOr4xhXJmRjJUn4e6blg6vrKEcuaCZKg+ev1mKB2feUJykqF6h/C7YRmutumhXI9i2Fcfnv9iKDvBIqOGch7JUH0u8U+GpeN0R3N0KKV8ffWFpz8aSsfhKqPMyvq6G5aOqaMeyln6G5aOUU/VsRGG0jHo9tTC1YYYSsd4oxTKNcawdNwrODbI8H129eZQrlGG5ezq/EbFxhmOHm8c/xtlKILxp5sDnAYZGsZsq5BsNMZQvIFqazgNMZS9qKM2sdEIQ8WRsDGGwo+yHUd7Q8M4qEakjTCUE8Q2bRJca0PxDTl5kl9jQ6aFGm1zfEMutnEsKNLmaSqbiWJcMLVJ86Xq78hVQ+H3j23R2yUZqk9JX1+ZKTgLF0iG6l97bXVtxFl8Qly34F97ksU1rAVExNU17vVDmcIzF0gRS/eUSxMvVCoke5+7kM99pAiyruPLBILdj1xgeuus0Cc/K4ZICcRlXNomxBemehpZneBVUzBMLIPmqYmSCURlRd/EmiiOujaWBOIyxLq2nFybKBMIt8otjF5KMgzVt1uUhuTlz9/xafWl6nvzylp98SdiSZCuYdE2zVDqvGUC0araj1znHau/h09GwVBK8js2rVY/WCh/805lhv52zIy232JI2Odcz9ZM6p4Z41XvLaTi7zinCRLKoGuiQz3DRX07Qk04tAHfMEba7yF9Jhom9ewEVcem7gMmzEXVBFGQUsteC8Q5DElX78eUmDtJdD8Xg7Y3T3LQ/GwThsOw1CeFa8Dc0QUJaX4NkM8bkKiniDXg0w/gMQiHDlQP04FtGh/+4S9ZDI29ro3YoW2u/OSgayP6tPT+C1M9OxuL8ajdjY6t6Hf5BMWrqN/Bez7XS/jBRLdW9Pe8guJB1ewsaNZH9J2pRud5ewt6SnEGbc5k71hjtmHiG5qcq7+u6lx9yfFuhE6vXlPTlDdB+JadvU15Tyo/g7zfIh/vt+2FJ2/rcCq938L2HHmph7dob/fjPJwllet9NQ2CeFmEaT4YT7btzDy9o+TLJSWf15T8wPu8oeT0ihLLMbP2djIe5GlYLOMgqNPsMsNA3jPzPCqK8p6ZcLX6uGgmOt41c0JUXjIjr5lZyWtmwvdrZmbLJNbEBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5/gPDMaYwmO9xi0AAAAASUVORK5CYII=" />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default MyProfile;