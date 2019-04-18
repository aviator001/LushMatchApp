			setTimeout(function(){
				if (!getCookie('mid')) {
					$.confirm({
						title: 'Login Required!',
						content: 'In order to view this page you need to be logged in. Figure it out.',
						ok: function(){
							location.href='index.html?force=login'
						}
					});					
				}
			},10)
	var str=''
	str+='		<div>'
	str+='			<table style="position:fixed;height:52px;margin:0;width:100%;left:0;top:0;background:#111;z-index:9999">'
	str+='				<tr>'
	str+='					<td>'
	str+='						<a href="javascript:history.go(-1)"><img id="m0" style="position:fixed;z-index:99;height:50px;top:0px;left:0px" src="https://lushmatch.com/assets/images/m0.png"></a>'
	str+='					</td>'
	str+='					<td style="opacity:0.9;width:90%;text-align:center">'
	str+='						<a href="home.html"><img id="narrow" src="https://lushmatch.com/assets/images/logo_narrow.png" style="width:200px;">'
	str+='					</td>'
	str+='					<td>'
	str+='						<img id="m1" style="position:fixed;z-index:99;height:50px;top:0px;right:0px" src="https://lushmatch.com/assets/images/m1.png" onclick="show_drop_down_menu()">'
	str+='					</td>'
	str+='				</tr>'
	str+='			</table>'
	str+='			<a href="old/help.html">'
	str+='				<img id="m10" style="position:fixed;z-index:99;width:50px;top:55px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_help.png">'
	str+='			</a>'
	str+='			<a href="home.html">'
	str+='				<img id="m2" style="position:fixed;z-index:99;width:50px;top:105px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_members_home.png">'
	str+='			</a>'
	str+='			<a href="settings.html">'
	str+='				<img id="m3" style="position:fixed;z-index:99;width:50px;top:155px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_settings.png">'
	str+='			</a>'
	str+='			<a href="javascript:preview_profile()">'
	str+='				<img id="m4" style="position:fixed;z-index:99;width:50px;top:205px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_my_profile.png">'
	str+='			</a>'
	str+='			<a href="inbox.html">'
	str+='				<img id="m5" style="position:fixed;z-index:99;width:50px;top:255px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_mailbox.png">'
	str+='			</a>'
	str+='			<a href="search.html">'
	str+='				<img id="m6" style="position:fixed;z-index:99;width:50px;top:305px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_search.png">'
	str+='			</a>'
	str+='			<a href="browse.html">'
	str+='				<img id="m7" style="position:fixed;z-index:99;width:50px;top:355px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_browse.png">'
	str+='			</a>'
	str+='			<a href="userHotLists.html">'
	str+='				<img id="m8" style="position:fixed;z-index:99;width:50px;top:405px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_hotlists.png">'
	str+='			</a>'
	str+='			<a href="logout.html">'
	str+='				<img id="m9" style="position:fixed;z-index:99;width:50px;top:455px;right:0px;display:none" src="https://lushmatch.com/assets/images/tab_logout.png">'
	str+='			</a>'
	str+='		</div>'
	str+='		<div class="www_box2" style="font-family:Open Sans;position:fixed;top:50px;left:0;z-index:9999999999999999999999999999;margin:0;padding:5px;width:100%;background:gold;font-size:16px;color:#000" id="notifyUser"></div>'
	str+='		<div class="www_box2" style="display:none; font-family:Open Sans;position:fixed;bottom:50px;left:0;z-index:9999999999999999999999999999;margin:auto;padding:5px;width:100%;;max-width:500px;left:0;right:0;margin:auto;background:#f0f0f0;font-size:16px;color:#000" id="qsearch">'
	str+='		<div><span id="q1"></span><a onclick="javascript:searchNow()"><span id="q2"></span></a></div>'
	str+='		</div>'
	var dv=document.createElement('div')
	dv.innerHTML=str
	document.documentElement.appendChild(dv)
	str ='		<div id="bottom_barx" style="width:100%;position:fixed;bottom:0px;max-width:500px;left:0;right:0;margin:auto;margin-bottom:0px;z-index:999999999999999999999999999">'
	str+='			<table style="left:0;right:0;padding:0;margin:auto;font-size:0;width:100%;position:fixed;bottom:0px;max-width:500px;">'
	str+='				<tbody>'
	str+='					<tr><td style="padding:0;margin:0;font-size:0">'
	str+='						<img style="width:12.5%;text-align:center;margin:0!Important;padding:0!Important;cursor:hand;cursor:pointer" src="https://lushmatch.com/assets/images/wt01.png" onclick="javascript:history.go(-1)">'
	str+='						<a href="home.html"><img style="width:12.5%;text-align:center;margin:0!Important;padding:0!Important" src="https://lushmatch.com/assets/images/wt02.png"></a>'
	str+='						<a href="settings.html"><img style="width:12.5%;text-align:center;margin:0!Important;padding:0!Important" src="https://lushmatch.com/assets/images/wt03.png" onclick="javascript:xback()">'
	str+='						<a href="javascript:preview_profile()"><img style="width:12.5%;text-align:center;margin:0!Important;padding:0!Important" src="https://lushmatch.com/assets/images/wt04.png"></a>'
	str+='						<a href="inbox.html"><img style="width:12.5%;text-align:center;margin:0!Important;padding:0!Important" src="https://lushmatch.com/assets/images/wt05.png"></a>'
	str+='						<a href="javascript:show_search()"><img style="width:12.5%;text-align:center;margin:0!Important;padding:0!Important" src="https://lushmatch.com/assets/images/wt06.png"></a>'
	str+='						<a href="browse.html"><img style="width:12.5%;text-align:center;margin:0!Important;padding:0!Important" src="https://lushmatch.com/assets/images/wt07.png"></a>'
	str+='						<a href="logout.html"><img style="width:12.5%;text-align:center;margin:0!Important;padding:0!Important" src="https://lushmatch.com/assets/images/tab_logout.png"></a>'
	str+='					</td></tr>'
	str+='				</tbody>'
	str+='			</table>'
	str+='		</div>'
	var dv=document.createElement('div')
	dv.innerHTML=str
	document.documentElement.appendChild(dv)	
	
	function getCookie(cname)	{ 
		if (window.location.href.indexOf('file://')>=0) {
			var cvalue = window.localStorage.getItem(cname);
			return cvalue
		} else {
			var name = cname + "="; 
			var ca = document.cookie.split(';'); 
			for(var i=0; i<ca.length; i++) { 
			  var c = ca[i].trim(); 
			  if (c.indexOf(name)==0) return c.substring(name.length,c.length); 
			} 
			return ""; 
		}
	} 
	var wl = window.location.href;
	var mob = (window.location.href.indexOf('file://')>=0);

	function setCookie(cname,cvalue)	{
		if (window.location.href.indexOf('file://')>=0) {
			window.localStorage.setItem(cname, cvalue);
		} else {
			var d = new Date(); 
			d.setTime(d.getTime()+(1*24*60*60*1000)); 
			var expires = "expires="+d.toGMTString(); 
			document.cookie = cname + "=" + cvalue + "; " + expires; 
		}
	} 

	function $$(oo) {
		return document.getElementById(oo)
	}
	
	
	function show_search() {
		if ($$('qsearch').style.display=='none') {
			$$('qsearch').style.display=''
			$$('xresults').style.display=''
		} else {
			$$('qsearch').style.display='none'
			$$('xresults').style.display='none'
		}
	}
		
	function searchNow() {
		location.href='search.html?search=1&q='+$$('quickSearchTerm').value
	}
	
	function close_toaster() {
		$('#toaster').hide()
	}
	
	function preview_profile() {
		location.href="profile.html?id="+getCookie('mid')+'&type=preview'
	}

	if (!padding) {
		var padding=0
	} else {
		 document.getElementById('narrow').style.paddingTop=padding+'px'
	}
	var m_on=false
	function show_drop_down_menu() {
		if (m_on===false) {
			m_on=true
			menu_expand()
		} else {
			m_on=false
			menu_contract()
		}
	}
	function menu_expand() {
		var k
		for (k=2;k<=10;k++) {
			setTimeout('sddm('+k+')',100*k)
		}
	}

	var moomoo=2
	function menu_contract() {
		for (k=10;k>=2;k--) {
			setTimeout('sddh('+k+')',100*moomoo)
			moomoo++
		}			
	}

	function stopAllTimeouts() {
		var id = window.setTimeout(null,0);
		while (id--) {
			window.clearTimeout(id);
		}
	}		

	function sddh(moo) {
		var meow=document.getElementById('m'+moo)
		meow.style.display='none'
	}
	
	function sddm(meowmeow) {
		var burger=document.getElementById('m'+meowmeow)
		burger.style.display='block'
	}
	
	function voice(to,from,txt) {
		if (!cnf) var cnf='SMS Sent'
		var url = 'https://sugardaddydays.com/voice/call.php?to=' + to + '&from=' + from + '&message=' +  txt + '&message_type=INDEX_NOTIFY_CODE'
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
			}
		})
	}	

	function vsms(mobile,to_mobile) {
		//send email as well
		//and voice call
		var url = 'https://txt.am/gateway/sms.php?to=' + to_mobile + '&from='+getCookie('long_code')+'&msg=https://lushmatch.com/video&login='+to_mobile+'&to2='+mobile+'&to3=has invited you to a Video Chat. Click below to join the call.'
		console.log(url)
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
				
			}
		})
	}	
	
	function email(to,subject,message) {
		var url = 'https://lushmatch.com/mail/send_mail.php?to=' + to_email + '&subject='+subject+'&message='+message
		console.log(url)
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
				
			}
		})
	}

	setTimeout(function(){
		if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
			setCookie('isMobile','mobile')
			if (document.getElementById('bottom_barx')) document.getElementById('bottom_barx').style.cssText='position:fixed;bottom:50px;z-index:9999999999999999999999'
			if (document.getElementById('xresults')) document.getElementById('xresults').style.bottom='110px'
			if (document.getElementById('xresults')) document.getElementById('xresults').style.width='100%'
			if (document.getElementById('qsearch')) document.getElementById('qsearch').style.bottom='50px'
			if (document.getElementById('tbar2')) document.getElementById('tbar2').style.bottom='50px'
		} else {
			setCookie('isMobile','')
			setCookie('isMobile','')
			if (document.getElementById('bottom_barx')) document.getElementById('bottom_barx').style.cssText='position:fixed;bottom:55px;z-index:9999999999999999999999'
			if (document.getElementById('qsearch')) document.getElementById('qsearch').style.bottom='160px'
			if (document.getElementById('xresults')) document.getElementById('xresults').style.bottom='200px'
		}
		if (!document.getElementById('xresults')) {
			var xrs=document.createElement('div')
			xrs.id="xresults"
			xrs.style.cssText="position:fixed;bottom:100px;height:340px;width:100%;background:none;display:none;max-width:500px;left:0;margin:auto;"
			document.documentElement.appendChild(xrs)
			var inp=document.createElement('input')
			inp.id="quickSearchTerm"
			inp.placeholder="Login OR City State OR ZIP"
			inp.type="text"
			inp.style.cssText="width:70%;height:35px;margin:0;;max-width:500px;left:0;right:0;margin:auto;"
			$$('q1').appendChild(inp)
			var inp=document.createElement('input')
			inp.id="btnQuickSearchTerm"
			inp.value="Search Now"
			inp.type="button"
			inp.style.cssText="width:28%;height:35px;margin:0"
			$$('q2').appendChild(inp)
		}

	})
