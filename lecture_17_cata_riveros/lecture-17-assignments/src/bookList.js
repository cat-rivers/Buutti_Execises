import react from "react";

function BookListUi() {
	const [books, updateBooks] = react.useState([
		{
			name: "Dune",
			pageCount: 412,
		},
		{
			name: "The eye of the World",
			pageCount: 782,
		},
	]);

	return (
		<div>
			<h2 className="assignment"> Assignment 4</h2>
			<div className="container">
				<div className="row">
					<div className="col-10  col-sm-8 col-md-6 col-lg-4 ">
						{/* <pre>{JSON.stringify(books, null, 2)}</pre>   This is just to check if the array was updating itself :)*/}
						<h1>Book List Service</h1>
						<p>Books:</p>
						{books.map(({name, pageCount}) => (
							<div
								key={name + pageCount}
								className="book-display"
								id="bookList"
							>
								<p className="">
									{name} ({pageCount} pages)
								</p>
							</div>
						))}

						<p>Add new Book:</p>
						<div className="col-12">
							<form
								action=""
								id="bookForm"
								onSubmit={(e) => {
									e.preventDefault();
									const formdata = new FormData(e.target);
									updateBooks([
										...books,
										{
											pageCount:
												formdata.get("pageCount"),
											name: formdata.get("bookName"),
										},
									]);
								}}
							>
								<input
									type="text"
									className="form-control form-control-lg my-2"
									name="bookName"
									placeholder="Book name"
								/>
								<input
									type="text"
									className="form-control form-control-lg my-2"
									name="pageCount"
									placeholder="Page count"
								/>
								<div className="col-6 mt-4 mb-4">
									<button className="btn btn-primary btn-lg">
										Add book
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookListUi;
