import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
	const { name, handle, description, logoUrl } = company;
	return (
		<Link to={`/${handle}`}>
			<div className="card mb-3">
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<figure className="image is-48x48">
								{logoUrl && <img src={logoUrl} alt={name} />}
							</figure>
						</div>
						<div className="media-content">
							<p className="title is-4">{name}</p>
						</div>
					</div>
					<div className="content">{description}</div>
				</div>
			</div>
		</Link>
	);
};

export default CompanyCard;
