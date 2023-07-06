document.addEventListener('DOMContentLoaded', () => {

let w = 980,
    h = 620
    m = 30

d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json')
    .then((data)=>{            
             console.log(data)

           let tooltip = d3.select('.chartHolder')
                           .append('div')
                           .attr('id','tooltip')
                           .style('margin-left','530px')
                           .style('margin-right','60px')
                           .style('margin-top','-40px')
                           .style('visibility','hidden')
                           
            const mouseOver = (e,d) => {       
                    tooltip.transition()
                           .style('visibility','visible')
                           .style('background-color', fill(d))
                    tooltip.text(`${d.data.name}: ${d.data.value} million sales`)
                           .attr('data-value',d.data.value) 
               }
         
            const mouseOut = () => {
                    tooltip.transition()
                           .style('visibility','hidden');   
               }       

             
            const svg = d3.select('.chart')
                           .append('svg')
                           .attr('height', h)
                           .attr('width', w-m-m);

            let hierarchy = d3.hierarchy(data,(node) => node.children)
                                .sum(node => node.value)
                                .sort((node1, node2) => node2.value - node1.value)
            let treemap = d3.treemap()
                            .size([w-m-m, h-m-m])
            treemap(hierarchy)
            let games = hierarchy.leaves()

            let fill = (game) => {
             if (game.data.category == '2600') {
               return 'greenyellow'
             } else if (game.data.category == 'Wii') {
               return 'aliceblue'
             } else if (game.data.category == 'NES') {
               return '#ba3d3d'
             } else if (game.data.category == 'GB') {
               return '#953da2'
             } else if (game.data.category == 'DS') {
               return '#db2929'
             } else if (game.data.category == 'X360') {
               return '#6dd254'
             } else if (game.data.category == 'PS3') {
               return '#e3ec43'
             } else if (game.data.category == 'PS2') {
               return 'darkgrey'
             } else if (game.data.category == 'SNES') {
               return '#745384'
             } else if (game.data.category == 'GBA') {
               return '#9920f0'
             } else if (game.data.category == 'PS4') {
               return 'orange'
             } else if (game.data.category == '3DS') {
               return 'blue'
             } else if (game.data.category == 'N64') {
               return '#ea4d26'
             } else if (game.data.category == 'PS') {
               return 'steelblue'
             } else if (game.data.category == 'XB') {
               return '#6f976f'
             } else if (game.data.category == 'PC') {
               return 'gold'
             } else if (game.data.category == 'XOne') {
               return 'chocolate'
             } else if (game.data.category == 'PSP') {
               return '#fda0dd'  
             }                   
            } 

            let tile = svg.selectAll('g')
                             .data(games)
                             .enter()
                             .append('g')
                             .attr('transform',(d) => `translate(${d.x0},${d.y0})`)

                         tile.append('rect')
                             .attr('class','tile')  
                             .attr('data-name', (d) => d.data.name)  
                             .attr('data-category',  (d) => d.data.category) 
                             .attr('data-value', (d) => d.value)
                             .attr('fill', (d) => fill(d))   
                             .attr('stroke','white')
                             .attr('width',(d) => d.x1 - d.x0)
                             .attr('height',(d) => d.y1 - d.y0)
                             .on('mouseover',mouseOver)
                             .on('mouseout',mouseOut)             

                         tile.append('text')
                             .text((d) => d.data.name)   
                             .attr('x','3px')
                             .attr('y','12px')
  
           let legend = svg.append('g')
                           .attr('id','legend')
               
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','0')
                           .attr('y','570')
                           .attr('fill', 'greenyellow')
                           .attr('stroke', 'grey')                           
                     legend.append('text')
                           .text('Atari 2600')
                           .attr('x','24')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','0')
                           .attr('y','595')
                           .attr('fill', 'aliceblue')
                           .attr('stroke', 'grey')                           
                     legend.append('text')
                           .text('Wii')
                           .attr('x','24')
                           .attr('y','608')  
                      
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','76')
                           .attr('y','570')
                           .attr('fill', '#ba3d3d')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('NES')
                           .attr('x','100')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','76')
                           .attr('y','595')
                           .attr('fill', '#953da2')
                           .attr('stroke', 'grey')                           
                     legend.append('text')
                           .text('GB')
                           .attr('x','100')
                           .attr('y','608') 

                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','125')
                           .attr('y','570')
                           .attr('fill', '#db2929')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('DS')
                           .attr('x','148')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','125')
                           .attr('y','595')
                           .attr('fill', '#6dd254')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('X360')
                           .attr('x','148')
                           .attr('y','608') 
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','175')
                           .attr('y','570')
                           .attr('fill', '#e3ec43')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('PS3')
                           .attr('x','198')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','175')
                           .attr('y','595')
                           .attr('fill', 'darkgrey')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('PS2')
                           .attr('x','198')
                           .attr('y','608')       


                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','222')
                           .attr('y','570')
                           .attr('fill', '#745384')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('SNES')
                           .attr('x','245')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','222')
                           .attr('y','595')
                           .attr('fill', '#9920f0')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('GBA')
                           .attr('x','245')
                           .attr('y','608')  

                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','275')
                           .attr('y','570')
                           .attr('fill', 'orange')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('PS4')
                           .attr('x','298')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','275')
                           .attr('y','595')
                           .attr('fill', 'blue')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('3DS')
                           .attr('x','298')
                           .attr('y','608')   
                         

                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','321')
                           .attr('y','570')
                           .attr('fill', '#ea4d26')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('N64')
                           .attr('x','343')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','321')
                           .attr('y','595')
                           .attr('fill', 'steelblue')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('PS')
                           .attr('x','343')
                           .attr('y','608')        

                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','365')
                           .attr('y','570')
                           .attr('fill', '#6f976f')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('XBOX')
                           .attr('x','388')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','365')
                           .attr('y','595')
                           .attr('fill', 'gold')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('PS')
                           .attr('x','388')
                           .attr('y','608')  
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','420')
                           .attr('y','570')
                           .attr('fill', 'chocolate')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('XBOne')
                           .attr('x','442')
                           .attr('y','584')
                           
                     legend.append('rect')
                           .attr('class', 'legend-item')
                           .attr('width','20px')
                           .attr('height','20px')
                           .attr('x','420')
                           .attr('y','595')
                           .attr('fill', '#fda0dd')
                           .attr('stroke', 'grey')                          
                     legend.append('text')
                           .text('PSP')
                           .attr('x','442')
                           .attr('y','608')                 
    })
    .catch((e) => console.log(e));      
})