import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <div class="navbar-group">
            <div class="link-border">
                 <Link to= "/character">
                    <span>Character</span>
                 </Link>
                 
            </div>
            <div class="link-border">
                <Link to= "/roll">
                    <span>Roll</span>
                </Link>
            </div>
        </div>
    )
}