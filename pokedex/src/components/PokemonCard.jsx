import { makeStyles } from "@material-ui/styles";
import { Card, CardMedia, CardContent, CardActionArea } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const usesStyle = makeStyles({
    root: {
        maxWidth: 345,
    },
})

const PokemonCard = () =>{
    const classes = usesStyle()

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    alt="Pikachu"
                    height="140"
                    image="https://imagenpng.com/wp-content/uploads/2016/09/025Pikachu_OS_anime_10.png"
                    title="Pikachu"    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Pikachu
                    </Typography>
                    <Typography variant="body" color="textSecondary" component="p">
                        Descripcion de Pikachu, uno de los primeros pokemons que aparecen en la serie.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PokemonCard;