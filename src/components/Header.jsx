import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardMedia } from '@mui/material';

const Header = () =>
{
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="210"
                    image="/banner.jpg"
                />
            </CardActionArea>
        </Card>
    );
}

export default Header;
