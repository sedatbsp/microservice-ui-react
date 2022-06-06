import { Link } from "react-router-dom";

const Unauthorized = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <span className="display-1">
                        401
                    </span>
                    <div className="mb-4 lead">
                        Bu sayfaya erişebilme yetkiniz yok!
                    </div>

                    <Link to={'/home'} className="btn btn-link">
                        Anasayfa'ya dön
                    </Link>

                </div>
            </div>
        </div>
    );

}

export { Unauthorized }