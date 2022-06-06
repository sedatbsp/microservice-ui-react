import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <span className="display-1">
                        404
                    </span>
                    <div className="mb-4 lead">
                        Aradığın sayfa bulunamadı!
                    </div>

                    <Link to={'/home'} className="btn btn-link">
                        Anasayfa'ya dön
                    </Link>

                </div>
            </div>
        </div>
    );

}

export { NotFound }