!(function (d3) {

//SEARCH FUNCTIONALITY


//===============================================
function select2DataCollectName(d) {
    if (d.children)
        d.children.forEach(select2DataCollectName);
    else if (d._children)
        d._children.forEach(select2DataCollectName);
    select2Data.push(d.name);
}

//===============================================
function searchTree(d) {
    if (d.children)
        d.children.forEach(searchTree);
    else if (d._children)
        d._children.forEach(searchTree);
    var searchFieldValue = eval(searchField);
    if (searchFieldValue && searchFieldValue.match(searchText)) {
            // Walk parent chain
            var ancestors = [];
            var parent = d;
            while (typeof(parent) !== "undefined") {
                ancestors.push(parent);
    //console.log(parent);
                parent.class = "found";
                parent = parent.parent;
            }
      //console.log(ancestors);
    }
}

//===============================================
function clearAll(d) {
    d.class = "";
    if (d.children)
        d.children.forEach(clearAll);
    else if (d._children)
        d._children.forEach(clearAll);
}

//===============================================
function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

//===============================================
function collapseAllNotFound(d) {
    if (d.children) {
      if (d.class !== "found") {
          d._children = d.children;
          d._children.forEach(collapseAllNotFound);
          d.children = null;
  } else
          d.children.forEach(collapseAllNotFound);
    }
}

//===============================================
function expandAll(d) {
    if (d._children) {
        d.children = d._children;
        d.children.forEach(expandAll);
        d._children = null;
    } else if (d.children)
        d.children.forEach(expandAll);
}

//===============================================
// Toggle children on click.
function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  clearAll(root);
  update(d);
  $("#searchbar").select2("val", "");
}

//===============================================
// modify type to reflect child majority
function typeEval(d) {
  if (d.type === "") {
    d.children.forEach(typeEval);
    //if children, count children failure #
      if (d.children) {

          var maintenanceScore = 0;

          for (var i = 0; i < d.children.length; i++) {
            maintenanceScore += d.children[i].type;
          }

          d.type = maintenanceScore;

      }
  }
}


//===============================================
$("#searchbar").on("select2-selecting", function(e) {
    clearAll(root);
    expandAll(root);
    update(root);

    searchField = "d.name";
    searchText = e.object.text;
    searchTree(root);
    root.children.forEach(collapseAllNotFound);
    update(root);
})




//===============================================
var margin = {top: 0, right: 120, bottom: 0, left: 120},
    width = 1000 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;


var tree = d3.layout.tree()
    .size([height, width]);


var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("#tree2").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



d3.json("../data/PM.json", function(error, flare) {
  root = flare;
  root.x0 = height / 2;
  root.y0 = 0;

  select2Data = [];
  select2DataCollectName(root);
  select2DataObject = [];
  select2Data.sort(function(a, b) {
            if (a > b) return 1; // sort
            if (a < b) return -1;
            return 0;
        })
        .filter(function(item, i, ar) {
            return ar.indexOf(item) === i;
        }) // remove duplicate items
        .filter(function(item, i, ar) {
            select2DataObject.push({
                "id": i,
                "text": item
            });
        });
  $("#searchbar").select2({
        data: select2DataObject,
        containerCssClass: "search"
  });

  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  typeEval(root);

  root.children.forEach(collapse);
  update(root);
});

d3.select(self.frameElement).style("height", "800px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);


  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", toggle)//LINKED TO SEARCH FUNCTION
      .on("click", click)//HOVER CONTROLS
      .on("mouseover", mouseover)//HOVER CONTROLS
      .on("mouseout", mouseout);//HOVER CONTROLS (SEE BOTTOM OF PAGE)


//Add circles/nodes to the end of each path
  nodeEnter.append("circle")
      .attr("r", 1e-6)

//returns position that text/label appears next to node
  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

//Change color based on search result
  nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d) {
        //d.type === "")

            if (d.type === "") {
                return "lightsteelblue";
            }
            // next 3 statements change color based on margin
              else if (d.type >= 0 && d.type < 30) {
                return "white";
            }
             else if (d.type >= 30) {
                return "yellow";
            }
             else if (d.type < 0) {
                return "red";
            }
             {
                return "blue";
            }
        })

        .style("stroke", function(d) {
            if (d.class === "found") {
                return "black"; //red
            }
        });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal)
      .style("stroke", function(d) {
            if (d.target.class === "found") {
                return "black";
            }
        });

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });



//----------------------------------------------//
//HOVER FUNCTIONALITY

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}

function mouseover(d) {
  d3.select(this).append("text")
    .attr("class", "hover")
    .attr('transform', function(d){
      return 'translate(100, 0)';// x&y coordinates for hover text.
        })
    // Get rid of hover text for parent nodes
    //return margin value for individual assets only
  .style("text-anchor", "middle")
  .style("font-size", "12px")
  .style("font-weight", "bold")
  .text(function(d) {
            if (d.type === "") {
                return "";
            }

            else {
                return ("Margin:" + " " + d.type)
            }
        });

}

// Toggle children on click.
function mouseout(d) {
    d3.select(this).select("text.hover").remove();
}


function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

//========CODE FOR COLLAPSE ALL/EXPAND ALL BUTTONS=======>
//COLLAPSE ALL NODES
function collapse2(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse2);
    d.children = null;
  }
}
//EXPAND ALL NODES
function expand2(d) {
  if (d._children) {
    d.children = d._children;
    d.children.forEach(expand2);
    d._children = null;
  }
}

//d.children.length === 0;

//EXPAND LAYER 2 (SUB ASSET TYPE)
function layer2(d){
    if(d._children){
        d.children = d._children;
        d.children.filter(function(d) { return d.name.indexOf("SpecialNode") > -1; })
          .forEach(layer2);
        d._children = null;
    }
}

//EXPAND LAYER 2 (SUB ASSET TYPE)
$("#layer2_button").click(function(){
  source.children.forEach(layer2);
  update(source);
});

//EXPAND ALL NODES
$("#expand_button").click(function(){
  source.children.forEach(expand2);
  update(source);
});

//COLLAPSE ALL NODES
$("#collapse_button").click(function(){
  root.children.forEach(collapse2);
  update(root);
});

}
})(d3);
