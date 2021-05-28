<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="resources/youtube.js"></script>
    <title>Youtube vedio search</title>
</head>
<body>
    <div class="container">
        <br/><br/>
        <h1>TOMATO</h1>
        <br/><br/>
        <form>
            <div class="form-group">
                <input type="text" class="form-control" id="search">
            </div>
            <br/>
            <div class="form-group">
                <input type="submit" class="btn btn-danger" value="Search">
            </div> 
        </form>

        <div class="row">
            <div class="col-md-12">
                <div id="videos">

                </div>
            </div>
        </div>
    </div>
</body>
</html>