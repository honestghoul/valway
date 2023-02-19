<!DOCTYPE html>
<html>
<head>
	<title>Moon Background</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script>
		var likeCount = 0;
		
		function likeButton() {
			likeCount++;
			document.getElementById("like-count").innerHTML = likeCount + " likes";
		}
	</script>
</head>
<body>
	<header>
		<h1>New Hot</h1>
		<nav>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<div class="image-container">
			<img src="moon-image.jpg">
		</div>
		<div class="poem">
			<h2>Old Poem</h2>
			<p>
				Once upon a midnight dreary,
				while I pondered, weak and weary,
				Over many a quaint and curious
				volume of forgotten lore
			</p>
			<button onclick="likeButton()">Like</button>
			<p id="like-count">0 likes</p>
		</div>
	</main>
</body>
</html>
