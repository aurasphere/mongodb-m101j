/*
 * MIT License
 * 
 * Copyright (c) 2018 Donato Rimenti
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ 

// Builds the pipeline.
var pipeline = [
    { $match : 
	    { $and : [
		    { "imdb.rating" : { $gte : 7 }}, 
			{ "genres" :
			    { $nin :[ "Crime", "Horror" ]}
			},
			{ "rated" :  
				{ $in : [ "PG", "G" ]}
			},
			{ "languages" :
				{ $all : [ "English", "Japanese" ]}
			}
		]}
	}
];

// Check the pipeline (should output 23).
var count = db.movies.aggregate(pipeline).itcount();
print("Documents fetched by the pipeline (should be 23): " + count);

// Validates the solution.
load('../m121/chapter1/validateLab1.js');
validateLab1(pipeline);