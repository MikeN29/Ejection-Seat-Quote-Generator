

    let resultRounded = []

    function myFunction() {

        let sum = []
    
        var a = document.getElementById('frm1').value;
        let aResult = parseInt(a) * 260000.00
        sum.push(aResult) 
    
        var b = document.getElementById('frm2').value;
        let bResult = parseInt(b) * 300000.00
        sum.push(bResult) 
    
        var c = document.getElementById('frm3').value;
        let cResult = parseInt(c) * 350000.00
        sum.push(cResult) 
    
        var d = document.getElementById('frm4').value;
        let dResult = parseInt(d) * 160000.00
        sum.push(dResult) 
    
        var e = document.getElementById('frm5').value;
        let eResult = parseInt(e) * 49.99
        sum.push(eResult) 
    
        var f = document.getElementById('frm6').value;
        let fResult = parseInt(f) * 19.99
        sum.push(fResult) 
    
        var g = document.getElementById('frm7').value;
        let gResult = parseInt(g) * 19.99
        sum.push(gResult) 
    
        var h = document.getElementById('frm8').value;
        let hResult = parseInt(h) * 39.99
        sum.push(hResult) 
    
        var i = document.getElementById('frm9').value;
        let iResult = parseInt(i) * 9.99
        sum.push(iResult)
    
        let result = sum.reduce(function(x, z) { return x + z; }, 0);
        let resultRounded = '£' + result.toFixed(2)

    
        document.getElementById("demo").innerHTML = resultRounded;

        
        }

        let itemadetails = []
        let itembdetails = []
        let itemcdetails = []
        let itemddetails = []
        let itemedetails = []
        let itemfdetails = []
        let itemgdetails = []
        let itemhdetails = []
        let itemidetails = []
    
        function addToInvoice() {
            var a = document.getElementById('frm1').value;
            let aSubTotal = parseInt(a) * 260000.00
            document.getElementById("item1").innerHTML = "Mk. 10B Seat";
            document.getElementById("item1price").innerHTML = "£260000.00";
            document.getElementById("item1qty").innerHTML = a;
            document.getElementById("item1Subtotal").innerHTML = `£${aSubTotal}`;
            itemadetails.push("item", "Mk. 10B Seat", "Unit Price", "£260000.00", "qty", a, "Sub-Total", aSubTotal)
    
            var b = document.getElementById('frm2').value;
            let bSubTotal = parseInt(b) * 300000.00
            document.getElementById("item2").innerHTML = "Mk. 16 Seat";
            document.getElementById("item2price").innerHTML = "£300000.00";
            document.getElementById("item2qty").innerHTML = b;
            document.getElementById("item2Subtotal").innerHTML = `£${bSubTotal}`;
            itembdetails.push("item", "Mk. 16 Seat", "Unit Price", "£300000.00", "qty", b, "Sub-Total", bSubTotal)
    
            var c = document.getElementById('frm3').value;
            let cSubTotal = parseInt(c) * 350000.00
            document.getElementById("item3").innerHTML = "Mk. 16e Seat";
            document.getElementById("item3price").innerHTML = "£350000.00";
            document.getElementById("item3qty").innerHTML = c;
            document.getElementById("item3Subtotal").innerHTML = `£${cSubTotal}`;
            itemcdetails.push("item", "Mk. 16e Seat","Unit Price", "£350000.00", "qty", c, "Sub-Total", cSubTotal)
    
            var d = document.getElementById('frm4').value;
            let dSubTotal = parseInt(d) * 160000.00
            document.getElementById("item4").innerHTML = "Mk. 17 Seat";
            document.getElementById("item4price").innerHTML = "£160000.00";
            document.getElementById("item4qty").innerHTML = d;
            document.getElementById("item4Subtotal").innerHTML = `£${dSubTotal}`;
            itemddetails.push("item", "Mk. 17 Seat","Unit Price", "£160000.00", "qty", d, "Sub-Total", dSubTotal)
    
            var e = document.getElementById('frm5').value;
            let eSubTotal = parseInt(e) * 49.99
            document.getElementById("item5").innerHTML = "Quick Release Box";
            document.getElementById("item5price").innerHTML = "£49.99";
            document.getElementById("item5qty").innerHTML = e;
            document.getElementById("item5Subtotal").innerHTML = `£${eSubTotal}`;
            itemedetails.push("item", "Quick Release Box", "Unit Price", "£49.99", "qty", e, "Sub-Total", eSubTotal)
    
            var f = document.getElementById('frm6').value;
            let fSubTotal = parseInt(f) * 19.99
            document.getElementById("item6").innerHTML = "MA-16 Inertia Reel";
            document.getElementById("item6price").innerHTML = "£19.99";
            document.getElementById("item6qty").innerHTML = f;
            document.getElementById("item6Subtotal").innerHTML = `£${fSubTotal}`;
            itemfdetails.push("item", "MA-16 Inertia Reel","Unit Price", "£19.99", "qty", f, "Sub-Total", fSubTotal)
    
            var g = document.getElementById('frm7').value;
            let gSubTotal = parseInt(g) * 19.99
            document.getElementById("item7").innerHTML = "Manual Life-Raft Inflation System";
            document.getElementById("item7price").innerHTML = "£19.99";
            document.getElementById("item7qty").innerHTML = g;
            document.getElementById("item7Subtotal").innerHTML = `£${gSubTotal}`;
            itemgdetails.push("item", "Manual Life-Raft Inflation System", "Unit Price", "£19.99", "qty", g, "Sub-Total", gSubTotal)
    
            var h = document.getElementById('frm8').value;
            let hSubTotal = parseInt(h) * 39.99
            document.getElementById("item8").innerHTML = "Digital Inline Timer";
            document.getElementById("item8price").innerHTML = "£39.99";
            document.getElementById("item8qty").innerHTML = h;
            document.getElementById("item8Subtotal").innerHTML = `£${hSubTotal}`;
            itemhdetails.push("item", "Digital Inline Timer", "Unit Price", "£39.99", "qty", h, "Sub-Total", hSubTotal)
    
            var i = document.getElementById('frm9').value;
            let iSubTotal = parseInt(i) * 9.99
            document.getElementById("item9").innerHTML = "Comfort Cushion";
            document.getElementById("item9price").innerHTML = "£9.99";
            document.getElementById("item9qty").innerHTML = i;
            document.getElementById("item9Subtotal").innerHTML = `£${iSubTotal}`;
            itemidetails.push("item", "Comfort Cushion", "Unit Price", "£9.99", "qty", i, "Sub-Total", iSubTotal)
    
        }
    
        function generateInvoice() {


            //push resultRounded to end of the array
            let invoice = []
            
    
            invoice.push(itemadetails, itembdetails, itemcdetails, 
                         itemddetails, itemedetails, itemfdetails,
                         itemgdetails, itemhdetails, itemidetails)
            console.log(invoice)
            alert(invoice)
    
        }
    


