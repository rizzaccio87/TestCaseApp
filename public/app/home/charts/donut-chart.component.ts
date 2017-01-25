import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'donut-chart',
    template: '<div></div>'
})
export class DonutChartComponent {
    // define an array of pie portions
    dataset = [1, 2, 5];

    constructor(private elementRef: ElementRef) {
        let el = this.elementRef.nativeElement;

        let width = 180,
            height = 180,
            radius = Math.min(width, height) / 2;

        // color scheme
        let color = d3.scaleOrdinal(d3.schemeCategory20);

        // compute pie angles from data
        let pie = d3.pie()(this.dataset);

        // create the arc paths
        let arc = d3.arc()
            .innerRadius(radius - 40)
            .outerRadius(radius - 10);

        // create the svg and create a group (g elem) to hold the arcs
        let svg = d3.select(el)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // for each item of the pie array create a group element
        let g = svg.selectAll("arc")
            .data(pie)
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
	        .attr("d", arc)
	        .style("fill", (d, i) => color(i));
    }
}