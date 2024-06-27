import { recipes } from "../data/recipes"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
    <h1>Bienvenido a Healthy Recipes</h1>
    <p>Explora nuestras recetas saludables y disfruta de una vida más sana.</p>
    <div className="d-flex flex-wrap">
        {recipes.map((recipe) => (
            <Card key={recipe.id} style={{ width: '18rem', margin: '1rem' }}>
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                    <Button variant="primary" as={Link} to={`/recetas/${recipe.id}`}>
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>
        ))}
    </div>
</div>
  )
}

export default Home
