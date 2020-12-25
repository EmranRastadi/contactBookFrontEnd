import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";

class Footer extends Component {
    render() {
        return (
            <div>
                <BottomNavigation className="bottomFooter">

                    <Grid item xs={12}>
                        <p>Copy Right</p>
                    </Grid>
                </BottomNavigation>
            </div>
        );
    }
}

export default Footer;