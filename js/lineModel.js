//
// (function () {
//
//   window.SketchLibrary = window.SketchLibrary || {};
//   SketchLibrary.drawLines = function (ctx, canvas, offsetX, offsetY) {
//
//     //
//     var rect = (function () {
//
//         // constructor
//         function rect(id, x, y, width, height, fill, stroke, strokewidth) {
//             this.x = x;
//             this.y = y;
//             this.id = id;
//             this.width = width;
//             this.height = height;
//             this.fill = fill || "gray";
//             this.stroke = stroke || "skyblue";
//             this.strokewidth = strokewidth || 2;
//             this.redraw(this.x, this.y);
//             return (this);
//         }
//         rect.prototype.redraw = function (x, y) {
//             this.x = x || this.x;
//             this.y = y || this.y;
//             this.draw(this.stroke);
//             return (this);
//         }
//         //
//         rect.prototype.highlight = function (x, y) {
//             this.x = x || this.x;
//             this.y = y || this.y;
//             this.draw("orange");
//             return (this);
//         }
//         //
//         rect.prototype.draw = function (stroke) {
//             ctx.save();
//             ctx.beginPath();
//             ctx.fillStyle = this.fill;
//             ctx.strokeStyle = stroke;
//             ctx.lineWidth = this.strokewidth;
//             ctx.rect(this.x, this.y, this.width, this.height);
//             ctx.stroke();
//             ctx.fill();
//             ctx.restore();
//         }
//         //
//         rect.prototype.isPointInside = function (x, y) {
//             return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
//         }
//
//         return rect;
//     })();
//
//     function handleMouseDown(e) {
//         e.preventDefault();
//
//         var rectOffset = canvas.getBoundingClientRect();
//
//         var pos = getMousePos(canvas, e);
//         var mouseX = pos.x;
//         var mouseY = pos.y;
//
//
//         // Put your mousedown stuff here
//         var clicked = "";
//         for (var i = 0; i < rects.length; i++) {
//
//             if (rects[i].isPointInside(mouseX, mouseY)) {
//                 $('#TargetsModal').modal('show');
//             }
//         }
//     }
//
//     //
//     function handleMouseMove(e) {
//
//         var pos = getMousePos(canvas, e);
//         var mouseX = pos.x;
//         var mouseY = pos.y;
//
//
//         // Put your mousemove stuff here
//         ctx.clearRect(-50, -50, canvas.width, canvas.height);
//         for (var i = 0; i < rects.length; i++) {
//             if (rects[i].isPointInside(mouseX, mouseY)) {
//                 rects[i].highlight();
//                 if(rects[i].id !== 'Line') {
//                   ctx.save();
//                   ctx.font = "20px Ariel";
//                   //ctx.fillStyle = 'red';
//                   ctx.fillText(rects[i].id, mouseX, mouseY);
//                   ctx.restore();
//                 }
//
//             } else {
//                 rects[i].redraw();
//             }
//         }
//     }
//
//     function getMousePos(canvas, evt) {
//         var rect = canvas.getBoundingClientRect();
//         return {
//           x: evt.clientX - rect.left - 25,
//           y: evt.clientY - rect.top - 25
//         };
//     }
//
//
//     //
//     var rects = [];
//     //
//
//     ctx.translate(25,25);
//
//     //Line 1
//     rects.push(new rect("Line", 25, 0, 5, 400, "black", "black", 5));
//     rects.push(new rect("Depelletizer", 0, 0, 50, 25, "gray", "black", 5));
//     rects.push(new rect("Labeler", 25, 40, 25, 35, "gray", "black", 5));
//     rects.push(new rect("Caser", 12, 100, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Shrinkwrapper", 12, 175, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Pelletizer", 12, 250, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Wrapper", 12, 390, 25, 35, 'gray', 'black', 5));
//
//     //Line 2
//     rects.push(new rect("Line", 125, 0, 5, 400, "black", "black", 5));
//     rects.push(new rect("Depelletizer", 100, 0, 50, 25, "gray", "black", 5));
//     rects.push(new rect("Labeler", 125, 40, 25, 35, "gray", "black", 5));
//     rects.push(new rect("Caser", 112, 100, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Shrinkwrapper", 112, 175, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Pelletizer", 112, 250, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Wrapper", 112, 390, 25, 35, 'gray', 'black', 5));
//
//     //Line 3
//     rects.push(new rect("Line", 225, 0, 5, 400, "black", "black", 5));
//     rects.push(new rect("Depelletizer", 200, 0, 50, 25, "gray", "black", 5));
//     rects.push(new rect("Labeler", 225, 40, 25, 35, "red", "black", 5));
//     rects.push(new rect("Caser", 212, 100, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Shrinkwrapper", 212, 175, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Pelletizer", 212, 250, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Wrapper", 212, 390, 25, 35, 'gray', 'black', 5));
//
//     //Line 4
//     rects.push(new rect("Line", 325, 0, 5, 400, "black", "black", 5));
//     rects.push(new rect("Depelletizer", 300, 0, 50, 25, "gray", "black", 5));
//     rects.push(new rect("Labeler", 325, 40, 25, 35, "gray", "black", 5));
//     rects.push(new rect("Caser", 312, 100, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Shrinkwrapper", 312, 175, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Pelletizer", 312, 250, 25, 35, 'yellow', 'black', 5));
//     rects.push(new rect("Wrapper", 312, 390, 25, 35, 'gray', 'black', 5));
//
//     // //Line 5
//     // rects.push(new rect("Line", 425, 0, 5, 400, "black", "black", 5));
//     // rects.push(new rect("Depelletizer", 400, 0, 50, 25, "gray", "black", 5));
//     // rects.push(new rect("Labeler", 425, 40, 25, 35, "gray", "black", 5));
//     // rects.push(new rect("Caser", 412, 100, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Shrinkwrapper", 412, 175, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Pelletizer", 412, 250, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Wrapper", 412, 390, 25, 35, 'gray', 'black', 5));
//     //
//     // //Line 6
//     // rects.push(new rect("Line", 625, 0, 5, 400, "black", "black", 5));
//     // rects.push(new rect("Depelletizer", 600, 0, 50, 25, "gray", "black", 5));
//     // rects.push(new rect("Labeler", 625, 40, 25, 35, "gray", "black", 5));
//     // rects.push(new rect("Caser", 612, 100, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Shrinkwrapper", 612, 175, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Pelletizer", 612, 250, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Wrapper", 612, 390, 25, 35, 'gray', 'black', 5));
//     //
//     // //Line 7
//     // rects.push(new rect("Line", 725, 0, 5, 400, "black", "black", 5));
//     // rects.push(new rect("Depelletizer", 700, 0, 50, 25, "gray", "black", 5));
//     // rects.push(new rect("Labeler", 725, 40, 25, 35, "red", "black", 5));
//     // rects.push(new rect("Caser", 712, 100, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Shrinkwrapper", 712, 175, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Pelletizer", 712, 250, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Wrapper", 712, 390, 25, 35, 'gray', 'black', 5));
//     //
//     // //Line 8
//     // rects.push(new rect("Line", 825, 0, 5, 400, "black", "black", 5));
//     // rects.push(new rect("Depelletizer", 800, 0, 50, 25, "gray", "black", 5));
//     // rects.push(new rect("Labeler", 825, 40, 25, 35, "gray", "black", 5));
//     // rects.push(new rect("Caser", 812, 100, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Shrinkwrapper", 812, 175, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Pelletizer", 812, 250, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Wrapper", 812, 390, 25, 35, 'gray', 'black', 5));
//     //
//     // //Line 9
//     // rects.push(new rect("Line", 925, 0, 5, 400, "black", "black", 5));
//     // rects.push(new rect("Depelletizer", 900, 0, 50, 25, "gray", "black", 5));
//     // rects.push(new rect("Labeler", 925, 40, 25, 35, "gray", "black", 5));
//     // rects.push(new rect("Caser", 912, 100, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Shrinkwrapper", 912, 175, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Pelletizer", 912, 250, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Wrapper", 912, 390, 25, 35, 'gray', 'black', 5));
//     //
//     // //Line 10
//     // rects.push(new rect("Line", 1025, 0, 5, 400, "black", "black", 5));
//     // rects.push(new rect("Depelletizer", 1000, 0, 50, 25, "gray", "black", 5));
//     // rects.push(new rect("Labeler", 1025, 40, 25, 35, "gray", "black", 5));
//     // rects.push(new rect("Caser", 1012, 100, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Shrinkwrapper", 1012, 175, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Pelletizer", 1012, 250, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Wrapper", 1012, 390, 25, 35, 'gray', 'black', 5));
//     //
//     // //Line 11
//     // rects.push(new rect("Line", 1125, 0, 5, 400, "black", "black", 5));
//     // rects.push(new rect("Depelletizer", 1100, 0, 50, 25, "gray", "black", 5));
//     // rects.push(new rect("Labeler", 1125, 40, 25, 35, "gray", "black", 5));
//     // rects.push(new rect("Caser", 1112, 100, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Shrinkwrapper", 1112, 175, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Pelletizer", 1112, 250, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Wrapper", 1112, 390, 25, 35, 'gray', 'black', 5));
//     //
//     // //Line 12
//     // rects.push(new rect("Line", 1225, 0, 5, 400, "black", "black", 5));
//     // rects.push(new rect("Depelletizer", 1200, 0, 50, 25, "gray", "black", 5));
//     // rects.push(new rect("Labeler", 1225, 40, 25, 35, "gray", "black", 5));
//     // rects.push(new rect("Caser", 1212, 100, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Shrinkwrapper", 1212, 175, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Pelletizer", 1212, 250, 25, 35, 'gray', 'black', 5));
//     // rects.push(new rect("Wrapper", 1212, 390, 25, 35, 'gray', 'black', 5));
//
//
//     $("#canvas").click(handleMouseDown);
//     $("#canvas").mousemove(handleMouseMove);
//
//   };
//
//   SketchLibrary.drawLine = function (ctx, canvas, offsetX, offsetY) {
//
//     //
//     var rect = (function () {
//
//         // constructor
//         function rect(id, x, y, width, height, fill, stroke, strokewidth) {
//             this.x = x;
//             this.y = y;
//             this.id = id;
//             this.width = width;
//             this.height = height;
//             this.fill = fill || "gray";
//             this.stroke = stroke || "skyblue";
//             this.strokewidth = strokewidth || 2;
//             this.redraw(this.x, this.y);
//             return (this);
//         }
//         rect.prototype.redraw = function (x, y) {
//             this.x = x || this.x;
//             this.y = y || this.y;
//             this.draw(this.stroke);
//             return (this);
//         }
//         //
//         rect.prototype.highlight = function (x, y) {
//             this.x = x || this.x;
//             this.y = y || this.y;
//             this.draw("orange");
//             return (this);
//         }
//         //
//         rect.prototype.draw = function (stroke) {
//             ctx.save();
//             ctx.beginPath();
//             ctx.fillStyle = this.fill;
//             ctx.strokeStyle = stroke;
//             ctx.lineWidth = this.strokewidth;
//             ctx.rect(this.x, this.y, this.width, this.height);
//             ctx.stroke();
//             ctx.fill();
//             ctx.restore();
//         }
//         //
//         rect.prototype.isPointInside = function (x, y) {
//             return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
//         }
//
//         return rect;
//     })();
//
//     function handleMouseDown(e) {
//         e.preventDefault();
//
//         var rectOffset = canvas.getBoundingClientRect();
//
//         var pos = getMousePos(canvas, e);
//         var mouseX = pos.x;
//         var mouseY = pos.y;
//
//
//         // Put your mousedown stuff here
//         var clicked = "";
//         for (var i = 0; i < rects.length; i++) {
//
//             if (rects[i].isPointInside(mouseX, mouseY)) {
//                 if(rects[i].id === 'Depelletizer') {
//                   $('#DepelletizerModal').modal('show');
//                 } else if (rects[i].id === 'Pelletizer') {
//                   $('#PelletizerModal').modal('show');
//                 } else if (rects[i].id === 'Labeler') {
//                   $('#LabelerModal').modal('show');
//                 }
//             }
//         }
//     }
//
//     //
//     function handleMouseMove(e) {
//
//         var pos = getMousePos(canvas, e);
//         var mouseX = pos.x;
//         var mouseY = pos.y;
//
//
//         // Put your mousemove stuff here
//         ctx.clearRect(-50, -50, canvas.width, canvas.height);
//         for (var i = 0; i < rects.length; i++) {
//             if (rects[i].isPointInside(mouseX, mouseY)) {
//                 rects[i].highlight();
//                 if(rects[i].id !== 'Line') {
//                   ctx.save();
//                   ctx.font = "20px Ariel";
//                   //ctx.fillStyle = 'red';
//                   ctx.fillText(rects[i].id, mouseX, mouseY);
//                   ctx.restore();
//                 }
//
//             } else {
//                 rects[i].redraw();
//             }
//         }
//     }
//
//     function getMousePos(canvas, evt) {
//         var rect = canvas.getBoundingClientRect();
//         return {
//           x: evt.clientX - rect.left - 25,
//           y: evt.clientY - rect.top - 25
//         };
//     }
//
//
//     //
//     var rects = [];
//     //
//
//     ctx.translate(25,25);
//
//
//     //Line 1
//     rects.push(new rect("Line", 25, 0, 5, 400, "black", "black", 5));
//     rects.push(new rect("Depelletizer", 0, 0, 50, 25, "gray", "black", 5));
//     rects.push(new rect("Labeler", 25, 40, 25, 35, "red", "black", 5));
//     rects.push(new rect("Caser", 12, 100, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Shrinkwrapper", 12, 175, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Pelletizer", 12, 250, 25, 35, 'gray', 'black', 5));
//     rects.push(new rect("Wrapper", 12, 390, 25, 35, 'yellow', 'black', 5));
//
//     $("#singleLineCanvas").click(handleMouseDown);
//     $("#singleLineCanvas").mousemove(handleMouseMove);
//
//   };
// }());
