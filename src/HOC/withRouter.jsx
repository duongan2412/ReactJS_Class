import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

// high order component la 1 function nhan vao 1 component va tra ra 1 component moi


export const withRouter = (Component) => {
    // return la compoent moi ( func component)
    return (props) => {
        // dung de chuyen trang 
        const navigate = useNavigate();
        // dung de lay params tren url
        const params = useParams();
        // dung de lay query params tren url
        const [searchParams] = useSearchParams()
        return <Component
            searchParams={searchParams}
            params={params}
            navigate={navigate}

        />;
    };
}