import { AppDispatch, RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { postDeleted } from "../../features/favorites/favoritesSlice"
import Button from "../Button/Button"
export default function Favorites() {
    const favorites = useSelector((state: RootState) => state.favorites.posts)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <section>
            <h2>Избранные: {favorites.length}</h2>
            {favorites.length === 0 && <p>Избранных постов пока нет</p>}

            <ul>
                {favorites.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Button onClick={() => dispatch(postDeleted(post.id))}>Удалить из избранного</Button>
                    </li>
                ))}
            </ul>
        </section>
    )
}