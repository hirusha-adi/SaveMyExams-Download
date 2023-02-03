this["JST"] = this["JST"] || {};

this["JST"]["global/_login"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<style>\n.member-logsign-change {\ncolor: #9a9a9a;\nfont-size: 0.8em;\nfont-weight: 600;\ntext-decoration: none;\ntext-align: center;\n}\n.member-logsign-change a {\ncolor: #9a9a9a;\nborder-bottom: 1px solid #9a9a9a;\n}\n.member-logsign-change a:hover {\ntext-decoration: none;\n}\n@keyframes shake {\n10%, 90% {\ntransform: translate3d(-2px, 0, 0);\n}\n20%, 80% {\ntransform: translate3d(4px, 0, 0);\n}\n30%, 50%, 70% {\ntransform: translate3d(-8px, 0, 0);\n}\n40%, 60% {\ntransform: translate3d(8px, 0, 0);\n}\n}\n.apply-shake {\nanimation: shake 1s cubic-bezier(.36,.07,.19,.97) both;\n}\n.member-logsign-invalid {\ntext-align: center;\nfont-weight: 700;\ncolor: red;\nopacity: 0;\nmargin: 10px 0;\ntransition: opacity 0.2s ease-out;\n}\n.member-logsign-invalid.active {\nopacity: 1;\n}\n.member-logsign-button-container {\ntext-align: center;\nmargin-top: 40px;\n}\n.member-logsign-button {\nmax-width: 256px;\nwidth: 100%;\nheight: 48px;\n}\n.member-logsign-rememberme {\nmargin-bottom: 40px;\n}\n</style><form method="post" id="login-form" action="javascript:void(0);">\n';
 if ( 'undefined' !== typeof window ) { ;
__p += '\n<input type="hidden" name="redirect" value="' +
__e(window.location.pathname + window.location.search) +
'">\n';
 } else {
if ( 'undefined' !== typeof redirect ) { ;
__p += '\n<input type="hidden" name="redirect" value="' +
__e(redirect) +
'">\n';
 }
} ;
__p += '\n<div class="modal-body m-4">\n<img src="https://cdn.savemyexams.co.uk/logo/sme-icon.svg" width="22px" height="35px" class="d-block mx-auto mb-3"><h4 class="h5 text-center mt-2 font-weight-bold">Log in to Save My Exams</h4>\n<div class="member-logsign-invalid">Email, username, or password is incorrect.</div>\n<div class="form-group">\n<label for="login-form-email">Email or username</label>\n<input type="text" class="form-control" id="login-form-email" placeholder="your@email.com" name="username" autocomplete="username">\n</div>\n<div class="form-group">\n<label for="login-form-password">Password</label>\n<input type="password" class="form-control" id="login-form-password" placeholder="Password" name="password" autocomplete="password">\n<div class="mt-2" style="float: right; font-size: 0.9em;">\n<a class="text-muted" href="javascript:void(0)" onclick="$( \'#modal-login\' ).modal( \'hide\' ); Sme.page.load(\'/forgot-password/\');">Forgot password?</a>\n</div>\n</div>\n<div class="form-group member-logsign-button-container">\n<div class="form-check member-logsign-rememberme">\n<input class="form-check-input rememberme-duration" type="checkbox" id="rememberme" name="rememberme" value="30" checked>\n<label class="form-check-label" for="rememberme">Keep me logged in on this device</label>\n</div>\n<span class="modal-error-message"></span>\n<input type="submit" class="btn btn-md btn-block btn-success" value="Log in">\n</div>\n<div class="member-logsign-change">\nNot a member? <a href="javascript:void(0);" onclick="$( \'#modal-login\' ).modal( \'hide\' ); window.localStorage.setItem(Sme.helpers.localStorageKeys.joinPageViewTrigger, Sme.track.EVENT_VALUES.viewJoinPageTriggers.loginModal); Sme.page.load(\'/join/\');">Join now!</a>\n</div>\n</div>\n</form><script>\n$(function() {\n$(\'#login-form\').on( \'submit\', function(e) {\nconsole.log( \'Logging in...\' );\ne.preventDefault();\nvar reauthing = false;\nif ( \'true\' == $(this).attr( \'data-reauthing\' ) ) {\nreauthing = true;\n}\nSme.helpers.login( $(this) );\n});\n});\n</script>';

}
return __p
};

this["JST"]["global/404"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<br><br><br><br><div class="frontAndCenter" style="text-align: center;">\n<h1 class="fancy">Sorry, this page wasn\'t found!</h1>\n<br><br><br>\n<div>\n<h3>Which exam are you taking?</h3>\n<br>\n<div class="row justify-content-center">\n<div class="col-md-2">\n<a class="btn btn-md btn-secondary btn-board my-3" href="/gcse/" style="width: 100%;">GCSE</a>\n</div>\n<div class="col-md-2">\n<a class="btn btn-md btn-secondary btn-board my-3" href="/igcse/" style="width: 100%;">IGCSE</a>\n</div>\n<div class="col-md-2">\n<a class="btn btn-md btn-secondary btn-board my-3" href="/a-level/" style="width: 100%;">A LEVEL</a>\n</div>\n<div class="col-md-2">\n<a class="btn btn-md btn-secondary btn-board my-3" href="/o-level/" style="width: 100%;">O LEVEL</a>\n</div>\n<div class="col-md-2">\n<a class="btn btn-md btn-secondary btn-board my-3" href="/pre-u/" style="width: 100%;">PRE U</a>\n</div>\n</div>\n<br><br><br><br><br><br><br><br>\n<a href="/" class="btn-callout blue" style="padding: 10px 50px;">Go to Homepage →</a>\n</div><script>\n$(function() {\nsetTimeout(() => {\nif (Sme.track) {\nSme.track.event(Sme.track.EVENT_TYPES.pageNotFound || Sme.track.EVENT_TYPES.errorPage, {\nerrorType: Sme.track.EVENT_VALUES.errorType.e404\n});\n}\n}, 500);\n});\n</script>\n</div>\n<br>';

}
return __p
};

this["JST"]["global/block-content-display"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


if ( null !== blocks ) {
for( let block of blocks ) {
// if PDF then skip some types.
if ( ( 'undefined' !== typeof pdf ) && ( true === pdf ) ) {
if ( 'vimeo' === block.type ) {
continue;
}
}
block.type = block.type.replace(/\\\//g, ''); // Remove all slashes for extra safety to prevent traversing.
try { // Try to render template (if it exists).
;
__p += '<div class="block" data-type="' +
__e(block.type) +
'">' +
((__t = ( Sme.template( 'global/blocks/' + block.type, { block: block, user: user } ) )) == null ? '' : __t) +
'</div>';

} catch(e) {
console.log( 'Error #439848943: Invalid block `' + block.type + '`. Details: ' + e );
;
__p += '{Error #89345a: Bad Block}';

}
}
}
;


}
return __p
};

this["JST"]["global/blocks/exam-tip"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


block = _.defaults( block, {
type: '',
hash: '',
body: '',
});;
__p += '\n<header>\n<i class="far fa-lightbulb"></i>\n<h4>Exam Tip</h4>\n</header>\n<div class="body">' +
((__t = ( block.body )) == null ? '' : __t) +
'</div>';

}
return __p
};

this["JST"]["global/blocks/html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


block = _.defaults( block, {
type: '',
hash: '',
body: '',
});;
__p +=
((__t = (block.body)) == null ? '' : __t);

}
return __p
};

this["JST"]["global/blocks/page-break"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<pagebreak />';

}
return __p
};

this["JST"]["global/blocks/syllabus-point"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


block = _.defaults( block, {
type: '',
hash: '',
title: '',
description: '',
});;
__p += 'Syllabus point title: ' +
__e(block.title) +
'\nSyllabus point description: ' +
__e(block.description);

}
return __p
};

this["JST"]["global/blocks/vimeo"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


block = _.defaults( block, {
type: '',
hash: '',
ratio: '4by3',
member: { id: '' },
nonmember: { id: '' },
});let videoId = block.nonmember.id;
if ( ( 'undefined' !== typeof user ) && ( null !== user ) && ( 'undefined' !== typeof user.roles ) && ( null !== user.roles ) && ( user.roles.includes('member') ) ) {
videoId = block.member.id;
}
;
__p += '\n';
if (false) {;
__p += '\n<div class="embed-responsive embed-responsive-' +
__e(block.ratio) +
'">\n<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/' +
__e(videoId) +
'?title=0&byline=0&portrait=0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n</div>\n';
};
__p += '\n<div id="vimeo-container-' +
__e(videoId) +
'" class="embed-responsive embed-responsive-' +
__e(block.ratio) +
'">\n<script>\n$(function() {\nconst vimeoId = \'' +
__e(videoId) +
'\';\nconst videoContainer = $(\'#vimeo-container-\'+vimeoId);\n$.ajax({\ntype: \'GET\',\nurl: \'https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/\' + vimeoId,\ndata: {\nautoplay: false,\nresponsive: true,\n},\nsuccess: async function( data, textStatus, xhr ) {\nif ( typeof( data ) != \'object\' ) { // Error if response is not JSON.\nconsole.log( \'Video error #34843844: \' + data );\n} else { // Got JSON.\n// console.log( \'Video data:\', data );\n// Build embed code\nvar videoEmbedCode = data.html;\nvideoContainer.html($(videoEmbedCode).find(\'iframe\')[0].outerHTML);\nvar iframe = videoContainer.find(\'iframe\').addClass(\'embed-responsive-item\')[0];try {\nawait Sme.helpers.activateVimeo();\nlet player = new Vimeo.Player(iframe);\nlet videoDuration = await player.getDuration();\nlet videoSeenTime = await player.getCurrentTime();\nlet isFirstPlay = true;\nconst maxTimeUntilEvent = videoDuration * 10;\nlet secondsSincePlay = 0;player.on(\'play\', async (data) => {\n// reset seen time if user restarts video\nvideoSeenTime = await player.getCurrentTime();\nsecondsSincePlay = 0;const sendEvents = (percent) => {\n';
 if ( 'undefined' !== typeof breadcrumbs ) { ;
__p += '\nSme.track.event(Sme.track.EVENT_TYPES.watchedVideo || Sme.track.EVENT_TYPES.watchVideo, {\n...' +
((__t = (JSON.stringify(breadcrumbs.titles))) == null ? '' : __t) +
',\nresourceType: Sme.track.EVENT_VALUES.resourceType.revisionNote,\ncontentAccess: Sme.helpers.userHasRole(\'member\') ? Sme.track.EVENT_VALUES.contentAccess.paid : Sme.track.EVENT_VALUES.contentAccess.free,\ninteraction: Sme.track.EVENT_VALUES.watchVideoInteraction.watchVideo,\noutcome: percent > 99 ? Sme.track.EVENT_VALUES.outcome.successful : Sme.track.EVENT_VALUES.outcome.unsuccessful,\nduration: videoDuration,\nvideoPlayTime: videoSeenTime,\npercent\n});\n';
 } ;
__p += '\n};const unloadFunction = () => {\nlet percent = (videoSeenTime / videoDuration * 100).toFixed(2);\npercent = percent > 100 ? 100 : percent;\nsendEvents(percent);\nSme.track.clearInProgressEvents();\n};if ( isFirstPlay ) {\n';
 if ( 'undefined' !== typeof breadcrumbs ) { ;
__p += '\nSme.track.event(Sme.track.EVENT_TYPES.interactedWithRevisionNotePage || Sme.track.EVENT_TYPES.engageWithRevisionNotes, {\n...' +
((__t = (JSON.stringify(breadcrumbs.titles))) == null ? '' : __t) +
',\ninteraction: Sme.track.EVENT_VALUES.engageRevisionNoteInteraction.watchVideo,\ncontentAccess: Sme.track.EVENT_VALUES.contentAccess.paid,\noutcome: Sme.helpers.userHasRole(\'member\') ? Sme.track.EVENT_VALUES.outcome.successful : Sme.track.EVENT_VALUES.outcome.unsuccessful,\nhasVideo: true\n});\n';
 } ;
__p += 'let videoTracker = setInterval(async () => {\nlet percent = (videoSeenTime / videoDuration * 100).toFixed(2);\npercent = percent > 100 ? 100 : percent;\n/* if the video is not in the DOM, then track it, otherwise update seen time */const finishInterval = () => {\nsendEvents(percent);\nclearInterval(videoTracker);\nwindow.removeEventListener(\'beforeunload\', unloadFunction);\n}\nsecondsSincePlay++;\nif( secondsSincePlay > maxTimeUntilEvent ) {\nfinishInterval();\n}if ( !player.element.contentWindow || percent > 99 ) {\nfinishInterval();\n} else {\nvideoSeenTime = await player.getCurrentTime();\n}\n}, 1000);window.addEventListener(\'beforeunload\', unloadFunction);\n}isFirstPlay = false;\n});\n} catch(e) {\nconsole.log( \'Warning #45343344334.\', e );\n}\n}\n},\nerror: function( XMLHttpRequest, textStatus, errorThrown ) { // http failure of somekind or not json\nconsole.log( \'Video error #4893894: \', errorThrown );\nconsole.log( XMLHttpRequest.responseText );\nalert( \'Error #839444: Failed loading video. Please refresh and try again or contact us if this persists.\' );\n}\n});\n});\n</script>\n</div>';

}
return __p
};

this["JST"]["global/blocks/worked-example"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


block = _.defaults( block, {
type: '',
hash: '',
body: '',
});;
__p += '\n<header>\n<i class="fas fa-question"></i>\n<h4>Worked Example</h4>\n</header>\n<div class="body">' +
((__t = ( block.body )) == null ? '' : __t) +
'</div>';

}
return __p
};

this["JST"]["global/dev-debug-modal"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="modal fade dev-debug-modal" id="dev-debug-modal">\n<style>\n.dev-debug-modal textarea {\nwidth: 100%;\nheight: 90vh;\nheight: calc( 90vh - 150px );\nwhite-space: pre;\noverflow-wrap: normal;\noverflow-x: scroll;\n}\n</style>\n<div class="modal-dialog modal-dialog-extra-wide">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content" style="max-height: 90vh; overflow: hidden;">\n<div class="modal-body" style="overflow: scroll; position: initial; margin-bottom: 50px;">\n<style>\n</style>\n<div class="dev-debug-tabs">\n<ul class="nav nav-tabs" id="dev-debug-tabs">\n<li class="nav-item">\n<a class="nav-link active" href="#debuglog" data-toggle="tab">Debug Log</a>\n</li>\n<li class="nav-item">\n<a class="nav-link" href="#smedata" data-toggle="tab">Sme.data</a>\n</li>\n<li class="nav-item">\n<a class="nav-link" href="#misc" data-toggle="tab">Misc</a>\n</li>\n<li class="nav-item">\n<a class="nav-link" href="#tools" data-toggle="tab">Tools</a>\n</li>\n</ul>\n</div>\n<br>\n<div class="tab-content" id="dev-debug-tabsContent">\n<div class="tab-pane fade show active" id="debuglog" role="tabpanel">\n<textarea id="debug-textarea-log" style=""></textarea>\n</div><!-- end smedata tab-pane -->\n<div class="tab-pane fade show" id="smedata" role="tabpanel">\n<textarea id="debug-textarea-smedata"></textarea>\n</div>\n<div class="tab-pane fade" id="misc" role="tabpanel">\n<textarea id="debug-textarea-misc" style=""></textarea>\n</div>\n<div class="tab-pane fade" id="tools" role="tabpanel">\n<button class="btn btn-primary debug-tools" data-action="main-menu-404-check">Check main menu for 404s (or other non-200s)</button>\n<textarea id="debug-textarea_main-menu-404-check" style="display: none; height: 300px;"></textarea>\n<textarea id="debug-textarea_main-menu-404-check_results" style="display: none; height: 300px;"></textarea>\n</div>\n</div>\n</div>\n</div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n<script>\n$(function(){\n// Sme.data.\n$(\'#debug-textarea-smedata\').append( JSON.stringify( Sme.data, null, 2 ) );\n// Misc information.\n$(\'#debug-textarea-misc\').append( \'window.sme_version: `\' + window.sme_version + "`.\\n" );\n$(\'#debug-textarea-misc\').append( \'window.Sme.environment: `\' + window.Sme.environment + "`.\\n" );\n$(\'#debug-textarea-misc\').append( \'window.Sme.flags: `\' + window.Sme.flags + "`.\\n" );\n$(\'#debug-textarea-misc\').append( \'window.Sme.constants: `\' + JSON.stringify( window.Sme.constants, null, 2 ) + "`.\\n" );\n$(\'#debug-textarea-misc\').append( \'window.Sme.isNexus: `\' + window.Sme.isNexus + "`.\\n" );\n// Logs.\nSme.debug._logs.forEach( function(logLine){\n$(\'#debug-textarea-log\').append( \'[\' + logLine.t + \'] <\' + logLine.d + \'>  \' + logLine.c + "\\n" );\n});\n$(\'#debug-textarea-log\').append( "\\n========== Sme.data ==========\\n\\n" );\n$(\'#debug-textarea-log\').append( $(\'#debug-textarea-smedata\').val() );\n$(\'#debug-textarea-log\').append( "\\n\\n========== Misc. ==========\\n\\n" );\n$(\'#debug-textarea-log\').append( $(\'#debug-textarea-misc\').val() );\n$(\'.debug-tools[data-action="main-menu-404-check"]\').click( function(){\nlet logArea = $( \'#debug-textarea_main-menu-404-check\' );\nlogArea.show();\nlogArea.append( "Checking top main nav menu URLs for 404s...\\n" );\nlet foundAnchors = $(\'.main-nav-wrap\').find( \'a\' );\nlogArea.append( \'Links (`a` tags) found number: `\' + foundAnchors.length + \'`.\' + "\\n" );\nlet results = [];\nlet totalSkipped = 0;\nlet totalChecked = 0;\nlet total200 = 0;\nlet totalFail = 0;\nlet i = 0;\nlet j = foundAnchors.length;\nconsole.log( \'j total\', j );\nfoundAnchors.each( async function(){\nlet link = $(this).attr( \'href\' );\ni++;\nsetTimeout( function(link, i){\nlogArea.scrollTop( 9999999999999 );\nif ( ( \'\' === link ) || ( \'javascript:void(0);\' === link ) || ( \'/logout\' === link ) || ( \'/logout/\' === link ) ) {\nlogArea.append( \'Skipping non-url: `\' + link + \'`.\' + "\\n" );\ntotalSkipped++;\n} else {\ntotalChecked++;\n$.ajax({\nurl: link,\ndataType: \'html\',\ntype:     \'GET\',\nasync: false,\ncache: false,\ncomplete:  function(xhr){\nxhr.status\nlogArea.append( \'[\' + xhr.status + \'] \' + link + "\\n" );\nif ( 200 !== xhr.status ) {\nresults.push( [ xhr.status, link ] );\ntotalFail++;\n} else {\ntotal200++;\n}\nconsole.log( \'i-233232\', i );\nif ( i === j ) {\nconsole.log( \'last one\' );\nlogArea.append( \'Total checked: `\' + totalChecked + \'`, total skipped: `\' + totalSkipped + \'`, total succeeded: `\' + total200 + \'`, total failed: `\' + totalFail + \'`.\' + "\\n" );\nlet resultText = \'\';\nresults.forEach( function(result) {\nresultText += result[0] + \',\' + result[1] + "\\n";\n});\n$( \'#debug-textarea_main-menu-404-check_results\' ).append( resultText );\n$( \'#debug-textarea_main-menu-404-check_results\' ).show();\nlogArea.scrollTop( 9999999999999 );\n}\n}\n});\n}\n}, i*220, link, i );\n});\n});\n});\n</script>\n</div>';

}
return __p
};

this["JST"]["global/login"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="modal fade" id="modal-login">\n<div class="modal-dialog">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content">\n' +
((__t = ( JST['global/_login']({}) )) == null ? '' : __t) +
'\n</div>\n</div>\n</div>';

}
return __p
};

this["JST"]["public/answers-schemes-upsell-modal"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal fade" id="answers-schemes-upsell-modal"><div class="modal-dialog">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content" style="background: linear-gradient(0deg, #ffffff, #efeff1);">\n<div class="modal-body text-center">\n<img src="https://cdn.savemyexams.co.uk/logo/sme-icon.svg" width="22px" height="35px" style="margin: 20px;">\n<h2 class="text-center" style="font-weight: 700;">Join Save My Exams</h2>\n<br>\n<h5 style="font-weight: 600; margin-bottom: 15px;">Get full access to all resources:</h5>\n<ul style="display: inline-block; text-align: left; padding-left:30px; margin-left: -15px; margin-bottom: 35px;">\n<li>Mark schemes & Model answers</li>\n<li>Exam questions organised by topic</li>\n<li>Downloadable question PDFs</li>\n<li>Progress tracking</li>\n</ul>\n<br>\n<a href="https://cdn.savemyexams.co.uk/uploads/2021/12/' +
__e(subject) +
'_model-answers-demo.pdf" class="btn btn-info" target="_blank" onclick="trackExamplePDFAction()">View Example PDF</a>\n<br>\n<br>\n<a href="/join/" class="btn btn-success" style="font-size: 1.3em; padding: 10px 60px;" onClick="window.localStorage.setItem(Sme.helpers.localStorageKeys.joinPageViewTrigger, ' +
__e(joinTrigger) +
')">Join Now</a>\n<br>\n<div style="text-align: center; margin-top: 18px; font-size: .85em; margin-bottom: 5px;">\nAlready a member? <a href="/login/?redirect=' +
__e(encodeURIComponent(window.location.pathname + window.location.search)) +
'" onClick="$( \'#questions-upsell-modal\' ).modal( \'hide\' );">Login</a>\n</div>\n</div>\n</div>\n</div>\n</div><script>\nfunction trackExamplePDFAction() {\nSme.track.event(Sme.track.EVENT_TYPES.downloadedPdf || Sme.track.EVENT_TYPES.downloadPdf, {\ninteraction: Sme.track.EVENT_VALUES.downloadPdfInteraction.viewExamplePdf,\nresourceType: Sme.track.EVENT_VALUES.resourceType.pastPaper,\ncontentAccess: Sme.track.EVENT_VALUES.contentAccess.free,\noutcome: Sme.track.EVENT_VALUES.outcome.successful\n});\n}\n</script>';

}
return __p
};

this["JST"]["public/coach-mark"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="sme-tour__coach-mark" role="dialog">\n<!-- id matches aria-describedby attribute on target element -->\n<span id="sme-tour__coach-mark__content">\n' +
((__t = ( content )) == null ? '' : __t) +
'\n</span>\n<button\naria-label="Close"\nclass="sme-tour__coach-mark__close"\nonclick="Sme.tour.stop()"\ntype="button"\n>\n<i class="fas fa-times" aria-hidden="true"></i>\n</button>\n</div>';

}
return __p
};

this["JST"]["public/notes-countdown"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div id="sme-countdown-banner" role="status" data-countdown="off">\n<p id="sme-countdown-content">\n<span id="sme-countdown-message">You have <span id="sme-countdown-count">a few</span> free <span id="sme-countdown-resource">resources</span> left this month.</span> <a href="/join/" onClick="joinPageAction()"><span id="sme-countdown-cta">Get a membership for unlimited access.</span></a>\n</p><script>\n$(function() {\nconst message = $.parseHTML(\'' +
((__t = ( message )) == null ? '' : __t) +
'\');\n$(\'#sme-countdown-message\').html(message);\n$(\'#sme-countdown-cta\').html(\'' +
((__t = ( cta )) == null ? '' : __t) +
'\');\n});\nfunction joinPageAction() {\nwindow.localStorage.setItem(Sme.helpers.localStorageKeys.joinPageViewTrigger, Sme.track.EVENT_VALUES.viewJoinPageTriggers.countdownJoinLink);\nconst views = Sme.limit.getRevisionNoteViews() || [];Sme.track.event(Sme.track.EVENT_TYPES.interactedWithBanner, {\nbannerType: Sme.track.EVENT_VALUES.bannerType.meteredPaywallCountdown,\ntrigger: Sme.track.EVENT_VALUES.limitingTrigger.approachedMeteredLimit,\nresourceType: Sme.track.EVENT_VALUES.resourceType.revisionNote,\nmeteredContentType: Sme.track.EVENT_VALUES.resourceType.revisionNote,\nhasVideo: Sme.helpers.getRevisionNotesHasVideo(),\nmeteredLimit: Sme.limit.SEE_PAYWALL_AT,\nmeterCurrentLevel: views.length,\ninteraction: Sme.track.EVENT_VALUES.limitingInteraction.joinPage,\n});\n}\n</script>\n</div>';

}
return __p
};

this["JST"]["public/notes-paywall"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<style>\n#variant {\ndisplay: none;\n}\n.emoji-pricing__tile {\nborder: 1px solid rgba(86, 86, 86, 0.1);\nbox-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.16);\npadding: 1rem;\npadding-top: 2rem;\nheight: 100%;\ndisplay: flex;\nflex-direction: column;\nborder-radius: 4px;\nposition: relative;\n}\n.emoji-pricing__tile--highlighted {\nborder: 2px solid var(--MAIN-500);\n}\n.emoji-pricing__name {\nfont-size: 20px;\nfont-weight: 700;\n}\n.emoji-pricing__name-subheading {\nfont-size: 16px;\n}\n.emoji-pricing__price {\nfont-weight: 700;\n}\n.emoji-pricing__price--large {\nfont-size: 30px;\n}\n.emoji-pricing__divider {\nborder-top: 1px solid rgba(86, 86, 86, 0.1);\nmargin-top: 1rem;\nmargin-bottom: 1rem;\n}\n.emoji-pricing__price-subheading {\nfont-size: 14px;\n}\n.emoji-pricing__badge {\ncolor: #FFFFFF;\nfont-size: 16px;\nheight: 32px;\nborder-radius: 16px;\nline-height: 32px;\ntext-align: center;\nposition: absolute;\ntop: -16px;\nleft: 50%;\ntransform: translateX(-50%);\nwidth: 154px;\n}\n.emoji-pricing__feature-list {\nlist-style: none;\npadding-left: 0;\nmargin-bottom: 0;\n}.emoji-pricing__feature-list__item {\nmargin-bottom: 10px;\npadding-left: 30px;\nposition: relative;\n}\n.emoji-pricing__feature-list__item::before {\ncontent: "\\f00c";\nfont-family: "Font Awesome 5 Pro";\ndisplay: block;\nwidth: 20px;\nheight: 20px;\nmargin-right: 10px;\nborder-radius: 50%;\nbackground-color: #77C17E;\ncolor: #FFFFFF;\nfont-size: 14px;\nline-height: 20px;\ntext-align: center;\nfont-weight: 400;\nposition: absolute;\ntop: 0;\nleft: 0;\n}\n.emoji-pricing__feature-list__item--not-included {\nopacity: 0.2;\n}\n</style>\n';

const benefits = [
'No ads',
'Unlimited Revision Notes',
'Past Papers',
'Topic Questions',
'Videos (Maths only)',
'Model Answers',
'Downlaodable PDFs'
]
;

 if ( Sme.constants.CONVERT_ACCOUNT_ID && Sme.constants.CONVERT_PROJECT_ID ) { ;
__p += '\n<script type="text/javascript" src="//cdn-3.convertexperiments.com/js/' +
__e(Sme.constants.CONVERT_ACCOUNT_ID) +
'-' +
__e(Sme.constants.CONVERT_PROJECT_ID) +
'.js"></script>\n';
 } ;
__p += '<div id="sme-pwall-member">\n<span>\nAlready a member?\n<a href="' +
__e( Sme.helpers.appendRedirect( '/login/', path ) ) +
'" id="sme-pwall-login" onClick="loginAction()">Log in</a>\n</span>\n</div>\n<header id="sme-pwall-header">\n<h3>Join now to get access to all Revision Notes and more...</h3>\n</header>\n<div class="px-3" id="sme-pwall-menu" labelledby="sme-pwall-title">\n<div class="row">\n<div class="col-lg-8 offset-lg-2">\n<img src="/images/join/emoji-nerd-out.png" width="64" height="64" class="mx-auto mb-3 original" alt="" role="presentation" />\n<ul class="sme-pwall-benefits">\n';
 benefits.forEach((item) => { ;
__p += '\n<li class="sme-pwall-benefit">\n<span class="fa-stack mr-1">\n<i class="fas fa-circle fa-stack-2x" style="color: #77C17E;"></i>\n<i class="fas fa-check fa-stack-1x fa-inverse"></i>\n</span>\n' +
__e( item ) +
'</li>\n';
 }) ;
__p += '\n</ul>\n<div class="original">\n<hr class="mx-lg-5 my-4"/>\n<p class="mb-0">Unlimited access for 12 months for just</p>\n<p class="mb-0"><strong><span class="sme-pwall-price">£5</span>/month</strong></p>\n<p class="mb-0"><span class="small">billed at <del>£120</del></span> <strong>£60/year</strong></p>\n<footer id="sme-pwall-footer">\n<a href="/join/" class="btn btn-primary btn-md conv-exp" onClick="joinPageAction()">View subscription options</a>\n</footer>\n</div><div class="mt-5 mx-xl-5" id="variant">\n<div class="row justify-content-center">\n';
 const plansToShow = plans.filter((plan) =>  plan.name !== 'Basic') ;
__p += '\n';
 for (const plan of plansToShow) { ;
__p += '\n<div class="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0 emoji-pricing__col">\n<div class="emoji-pricing__tile ' +
__e( plan.highlighted ? 'emoji-pricing__tile--highlighted' : '' ) +
'">\n';
 if (plan.badge) { ;
__p += '\n<div class="emoji-pricing__badge" style="background-color:' +
__e(plan.badge.color) +
';">' +
__e(plan.badge.text) +
'</div>\n';
 } ;
__p += '\n<img src="/images/join/emoji-' +
__e(plan.name.toLowerCase().split(' ').join('-')) +
'.png" width="64" height="64" class="mx-auto mb-2 d-block" alt="" role="presentation" />\n<div class="emoji-pricing__name text-center">' +
__e( plan.name ) +
'</div>\n<div class="text-center">' +
__e( plan.nameSubheading ) +
'</div>\n<div class="emoji-pricing__divider"></div>\n<div class="emoji-pricing__price text-center">\n<span class="emoji-pricing__price--large">£' +
__e( plan.priceMonthly['gbp'].slice(1) ) +
'</span>/month\n</div>\n<div class="emoji-pricing__price-subheading text-center mb-3">' +
__e( plan.priceSubheading['gbp'] ) +
'</div>\n';
 if (plan.checkoutUrl && plan.checkoutUrl['gbp'] && plan.callToAction) { ;
__p += '\n<a\nclass="btn btn-lg btn-block conv-exp mt-auto ' +
__e( plan.highlighted ? 'btn-primary' : 'btn-tertiary' ) +
'"\nhref="' +
__e( typeof user !== 'undefined' && user ? plan.checkoutUrl['gbp'] : plan.checkoutUrl['gbp'].replace('checkout', 'signup') + '&membershipType=' + plan.membershipType  ) +
'" ';
 if (plan.membershipType) { ;
__p += 'data-membership-type="' +
__e( plan.membershipType ) +
'"';
 } ;
__p += '\nonClick="signUpAction(this)"\n>\n' +
__e( plan.callToAction.toUpperCase() ) +
'\n</a>\n';
 } ;
__p += '\n</div>\n</div>\n';
 } ;
__p += '\n</div>\n<footer class="mb-4 mt-lg-4">\n<a href="/join/" style="text-decoration: underline;" onClick="joinPageAction()">Learn more about a Save My Exams membership.</a>\n</footer>\n</div></div>\n</div>\n</div><script>\n$(function() {\nconst session = JSON.parse(window.localStorage.getItem(Sme.helpers.localStorageKeys.session));\nconst sessionId = session && session.id;const userId = Sme.track.getUserId();\nconst anonId = Sme.track.getAnonymousId();if (sessionId) {\nfor (const link of $(\'[data-membership-type]\')) {\nconst url = new URL(link.href);\nurl.searchParams.append(\'truserid\', userId);\nurl.searchParams.append(\'tranonid\', anonId);\nurl.searchParams.append(\'trsessid\', sessionId);\nlink.href = url;\n}\n}if(!!Sme.data.user) {\n$(\'#sme-pwall-member\').hide();\n}\n});function loginAction() {\nSme.track.event(Sme.track.EVENT_TYPES.interactedWithPaywall, {\ninteraction: Sme.track.EVENT_VALUES.limitingInteraction.logIn,\n});\n}function joinPageAction() {\nwindow.localStorage.setItem(Sme.helpers.localStorageKeys.joinPageViewTrigger, Sme.track.EVENT_VALUES.viewJoinPageTriggers.paywallJoinLink);Sme.track.event(Sme.track.EVENT_TYPES.interactedWithPaywall, {\ninteraction: Sme.track.EVENT_VALUES.limitingInteraction.joinPage,\n});\n}function signUpAction(element) {\nconst membershipType = $(element).attr(\'data-membership-type\');\nconst couponId = $(element).attr(\'href\').search("couponid") !== -1 ? $(element).attr(\'href\').split("couponid=")[1] : null;// Signed in users are not directed to the Stripe checkout page\nif (membershipType && ( !Sme.data.user || !Sme.helpers.userHasRole(\'member\'))) {\nif (Sme.data.user) {\nSme.track.event(Sme.track.EVENT_TYPES.directedToCheckoutPage || Sme.track.EVENT_TYPES.landsCheckoutPage, {\norigin: Sme.track.EVENT_VALUES.landsCheckoutPageOrigin.paywall,\nmembershipType: membershipType,\ncouponId: couponId\n});\n}Sme.track.event(Sme.track.EVENT_TYPES.interactedWithPaywall, {\ninteraction: Sme.track.EVENT_VALUES.limitingInteraction.joinNow,\nmembershipType: membershipType,\ncouponId: couponId\n});\n}\n}\n</script>';

}
return __p
};

this["JST"]["public/notes-upsell-modal"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="modal fade" id="notes-upsell-modal"><div class="modal-dialog">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content" style="background: linear-gradient(0deg, #ffffff, #efeff1);">\n<div class="modal-body text-center">\n<h2 class="text-center" style="font-weight: 700;">Join Save My Exams</h2>\n<br>\n';
 if (typeof trigger !== 'undefined' && trigger === Sme.track.EVENT_VALUES.limitingTrigger.approachedMeteredLimit) { ;
__p += '\n<h3 class="text-center">You have used <span data-limit="see-modal"></span> of your <span data-limit="see-paywall"></span> free Revision Notes for this month</h3><img src="https://cdn.savemyexams.co.uk/uploads/2020/05/Revision-Notes-PDF-Spread-700x495.png" style="width: 80%;" alt="Revision Notes Spread">\n<br>\n<br>\n<a href="/join/" class="btn btn-success" style="font-size: 1.3em; padding: 10px 60px;" onClick="window.localStorage.setItem(Sme.helpers.localStorageKeys.joinPageViewTrigger, Sme.track.EVENT_VALUES.viewJoinPageTriggers.revisionNotesPopupLink)">Join now for unlimited access</a>\n<br>\n<div style="text-align: center; margin-top: 18px; font-size: .85em; margin-bottom: 5px;">\nAlready a member? <a href="/login/?redirect=' +
__e(encodeURIComponent(window.location.pathname + window.location.search)) +
'" onClick="$( \'#questions-upsell-modal\' ).modal( \'hide\' );">Login</a>\n</div>\n';
 } else { ;
__p += '\n<img src="https://cdn.savemyexams.co.uk/uploads/2020/05/Revision-Notes-PDF-Spread-700x495.png" style="width: 80%;" alt="Revision Notes Spread">\n<br>\n<br>\n<h4 style="font-weight: 600; margin-bottom: 15px;">Download all our Revision Notes as PDFs</h4>\nTry a <a href="https://cdn.savemyexams.co.uk/uploads/2020/05/CIE-IGCSE-Biology-9-RN_Sample.pdf" target="_blank" onclick="trackFreeSamplePDFAction()">Free Sample</a> of our revision notes as a printable PDF.\n<br>\n<br>\n<a href="/join/" class="btn btn-success" style="font-size: 1.3em; padding: 10px 60px;" onClick="window.localStorage.setItem(Sme.helpers.localStorageKeys.joinPageViewTrigger, Sme.track.EVENT_VALUES.viewJoinPageTriggers.revisionNotesPremiumPaywall)">Join Now</a>\n<br>\n<div style="text-align: center; margin-top: 18px; font-size: .85em; margin-bottom: 5px;">\nAlready a member? <a href="/login/?redirect=' +
__e(encodeURIComponent(window.location.pathname + window.location.search)) +
'" onClick="$( \'#questions-upsell-modal\' ).modal( \'hide\' );">Login</a>\n</div>\n';
 } ;
__p += '\n</div>\n</div>\n</div>\n</div><script>\n$(\'[data-limit="see-modal"]\').text(Sme.limit.SEE_UPSELL_MODAL_AT);\n$(\'[data-limit="see-paywall"]\').text(Sme.limit.SEE_PAYWALL_AT - 1);function trackFreeSamplePDFAction() {\nSme.track.event(Sme.track.EVENT_TYPES.downloadedPdf || Sme.track.EVENT_TYPES.downloadPdf, {\ninteraction: Sme.track.EVENT_VALUES.downloadPdfInteraction.downloadFreeSample,\nresourceType: Sme.track.EVENT_VALUES.resourceType.revisionNote,\ncontentAccess: Sme.track.EVENT_VALUES.contentAccess.free,\noutcome: Sme.track.EVENT_VALUES.outcome.successful\n});\n}\n</script>';

}
return __p
};

this["JST"]["public/pdf-viewer"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '';

}
return __p
};

this["JST"]["public/questions-upsell-modal"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal fade" id="questions-upsell-modal"><div class="modal-dialog">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content" style="background: linear-gradient(0deg, #ffffff, #efeff1);">\n<div class="modal-body text-center">\n<img src="https://cdn.savemyexams.co.uk/logo/sme-icon.svg" width="22px" height="35px" style="margin: 20px;">\n<h2 class="text-center" style="font-weight: 700;">Join Save My Exams</h2>\n<br>\n<h5 style="font-weight: 600; margin-bottom: 15px;">Get full access to all resources:</h5>\n<ul style="display: inline-block; text-align: left; padding-left:30px; margin-left: -15px; margin-bottom: 35px;">\n<li>Exam questions organised by topic</li>\n<li>Model answers</li>\n<li>Downloadable question PDFs</li>\n<li>Progress tracking</li>\n</ul>\n<br>\n<a href="/join/" class="btn btn-success" style="font-size: 1.3em; padding: 10px 60px;" onClick="window.localStorage.setItem(Sme.helpers.localStorageKeys.joinPageViewTrigger, Sme.track.EVENT_VALUES.viewJoinPageTriggers.topicQuestionsPremiumPaywall)">Join Now</a>\n<br>\n<div style="text-align: center; margin-top: 18px; font-size: .85em; margin-bottom: 5px;">\nAlready a member? <a href="/login/?redirect=' +
__e(encodeURIComponent(window.location.pathname + window.location.search)) +
'" onClick="$( \'#questions-upsell-modal\' ).modal( \'hide\' );">Login</a>\n</div>\n</div>\n</div>\n</div>\n</div>';

}
return __p
};

this["JST"]["public/questions-view-key-concepts-modal"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


/* Incoming vars:
* 		postType, postHash
*/
;
__p += '<div class="modal fade" id="modal-questions-key-concepts">\n<div class="modal-dialog modal-dialog-wide modal-white">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content">\n<div class="modal-body">\n<div id="modal-questions-quick-answers-content" class="resource-content key-concepts-content">\n<header style="margin-top: 30px;">\n<h3 class="modal-title">' +
__e(specpoint) +
'</h3>\n</header>\n';
 if ( '' === contents ) { ;
__p += '\n<div class="text-center text-muted" style="margin-top:40px">Sorry, this key concept isn\'t available yet.</div>\n';
 } ;
__p += '\n' +
((__t = (contents)) == null ? '' : __t) +
'\n<br>\n<br>\n<small>\n';

sources.forEach( function(source) {
;
__p += '<a href="' +
__e(source.url) +
'">Go to source page</a>\n';
 if ( Sme.helpers.userHasRole( 'staff' ) ) { ;
__p += '\n<br>(Staff: <a class="direct-link" href="/nexus/resources/revision-notes/editor/' +
__e(source.postHash) +
'/">Edit Post</a> - Post ID: ' +
__e(source.postHash) +
', Part ID: ' +
__e(source.partHash) +
')\n';
 } ;
__p += '\n<br>';

});
;
__p += '\n</small>\n</div>\n</div>\n</div>\n</div>\n<script>\n$(function() {\nSme.helpers.activatePopovers();\n});\n</script>\n</div>';

}
return __p
};

this["JST"]["public/questions-view-quick-answers-contents"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


// incoming: pages: [ { problem: '', solution: '', partHash: '' }, ... ]// A "page" is an individual question.
let pageNumber = 0;
pages.forEach( function(question) {
pageNumber++;
let hasNextPart = false;
let partNumber = 0;
let partLetter = '';
question.forEach( function(part,partIndex) {
hasNextPart = ( 'undefined' !== typeof question[partIndex+1] );
partNumber++;
if ( partNumber > 25 ) { // Prevent from going past z.
partNumber = 0;
}
// Only show a part letter if there's more than one part on this question.
if ( ( 1 === partNumber ) && ( false === hasNextPart ) ) {
partLetter = '';
} else {
partLetter = String.fromCharCode( 96 + partNumber );
}
if ( ( null !== part.solution )  && ( part.solution.length > 0 ) ) {
;
__p += '\n<br>\n<h5>Question ' +
__e(pageNumber) +
'' +
__e(partLetter) +
'</h5>\n<br>\n<!-- Sme.template( \'global/block-content-display\', { blocks: content.problem } ) -->\n' +
((__t = (Sme.template( 'global/block-content-display', { blocks: part.solution, user: user } ))) == null ? '' : __t);

}
});
});
;


}
return __p
};

this["JST"]["public/questions-view-quick-answers-modal"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


/* Incoming vars:
* 		postType, postHash, pageNumber
*/
;
__p += '<div class="modal fade" id="modal-questions-quick-answers">\n<div class="modal-dialog modal-dialog-extra-wide modal-white">\n<style>\n.quick-answers-content h5 {\nfont-weight: 700;\n}\n</style>\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content">\n<div class="modal-body">\n<h3 class="modal-title" style="margin-top: -8px; margin-bottom: 8px;">Quick Answers</h3>\n<div id="modal-questions-quick-answers-content" class="resource-content quick-answers-content">\n' +
((__t = (content)) == null ? '' : __t) +
'\n</div>\n</div>\n</div>\n</div>\n<script>\n$(function() {\nSme.helpers.activatePopovers();\n});\n</script>\n</div>';

}
return __p
};

this["JST"]["public/questions-view-solution-modal"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


/* Incoming vars:
* 		content
*/
;
__p += '<div class="modal fade" id="modal-questions-solution">\n<div class="modal-dialog modal-dialog-extra-wide modal-white">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content">\n<div class="modal-body">\n<h3 class="modal-title" style="margin-top: -8px; margin-bottom: 8px;">Answer</h3>\n<div id="modal-questions-solution-content" class="resource-content solution-content">\n' +
((__t = (content)) == null ? '' : __t) +
'\n</div>\n</div>\n</div>\n</div>\n<script>\n$(function() {\nSme.helpers.activatePopovers();\n});\n</script>\n</div>';

}
return __p
};

this["JST"]["public/questions-watch-solution-modal"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


/* Incoming vars:
* 		video
*/
;
__p += '<div class="modal fade" id="modal-questions-video">\n<style>\n#modal-questions-video-content > div {\npadding: 90vh 0 0 0 !important;\npadding: calc( 100vh - 125px ) 0 0 0 !important;\n}\n</style>\n<div class="modal-dialog modal-dialog-wide modal-white" style="max-height: 95vh;">\n<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fas fa-times"></i></button>\n<div class="modal-content">\n<div class="modal-body">\n<h3 class="modal-title" style="margin-top: -8px; margin-bottom: 8px;">Solution</h3>\n<div id="modal-questions-video-content">\n</div>\n</div>\n</div>\n</div>\n<script>\n$(function() {\nlet vimeoId = \'' +
__e(video.solution_vimeo) +
'\';\nlet videoContainer = $(\'#modal-questions-video-content\');\nlet modelDialog = $(\'#modal-questions-video\').find(\'.modal-dialog\');\n/* https://developer.vimeo.com/api/oembed/videos */\n$.ajax( {\ntype: \'GET\',\nurl: \'https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/\' + vimeoId,\ndata: {\nautoplay: true,\nresponsive: true,\n},\nsuccess: async function( data, textStatus, xhr ) {\nif ( typeof( data ) != \'object\' ) { // Error if response is not JSON.\nconsole.log( \'Video error #34843844: \' + data );\n} else { // Got JSON.\n// console.log( \'Video data:\', data );\nvar videoRatio = data.width / data.height;\n// console.log( \'Video ratio:\', videoRatio );\n// Allow for better styling of modal based on video size.\n// NOTE: In the future this could handle more precise ratios, like wide 16x9.\nif ( videoRatio > 1.5 ) {\nmodelDialog.addClass( \'modal-dialog-extra-wide\' );\n}\n// Build embed code\nvar videoEmbedCode = data.html;\nvideoContainer.html(videoEmbedCode);\nvar iframe = videoContainer.find(\'iframe\');\ntry {\nawait Sme.helpers.activateVimeo();let player = new Vimeo.Player(iframe);\nlet videoDuration = await player.getDuration();\nlet videoSeenTime = await player.getCurrentTime();\nlet isFirstPlay = true;\nconst maxTimeUntilEvent = videoDuration * 20;\nlet secondsSincePlay = 0;player.on(\'play\', async (data) => {\n// reset seen time if user restarts video\nvideoSeenTime = await player.getCurrentTime();\nsecondsSincePlay = 0;const sendEvents = (percent) => {\n';
 if ( 'undefined' !== typeof breadcrumbs ) { ;
__p += '\nSme.track.event(Sme.track.EVENT_TYPES.watchedVideo || Sme.track.EVENT_TYPES.watchVideo, {\n...' +
((__t = (JSON.stringify(breadcrumbs.titles))) == null ? '' : __t) +
',\nresourceType: Sme.track.EVENT_VALUES.resourceType.topicQuestion,\nquestionType: \'' +
__e(questionType) +
'\',\nformat: Sme.track.EVENT_VALUES.topicQuestionFormat.new,\ncontentAccess: Sme.helpers.userHasRole(\'member\') ? Sme.track.EVENT_VALUES.contentAccess.paid : Sme.track.EVENT_VALUES.contentAccess.free,\ninteraction: Sme.track.EVENT_VALUES.watchVideoInteraction.watchSolution,\n// Depending on the rounding of the video watch time, it\'s possible to get a duration slightly more than the seen time\n// even if they watched the full video hence > 99%\noutcome: percent > 99 ? Sme.track.EVENT_VALUES.outcome.successful : Sme.track.EVENT_VALUES.outcome.unsuccessful,\nduration: videoDuration,\nvideoPlayTime: videoSeenTime,\npercent,\nnumberQuestions: Sme.helpers.getTopicQuestionQuestionCount(),\nnumberQuestionParts: Sme.helpers.getTopicQuestionQuestionPartCount(),\nquestionNumber: ' +
__e(questionNumber) +
',\nquestionNumberPart: ' +
__e(questionNumberPart) +
',\n});\nSme.track.event(Sme.track.EVENT_TYPES.viewedSolution || Sme.track.EVENT_TYPES.viewSolution, {\n...' +
((__t = (JSON.stringify(breadcrumbs.titles))) == null ? '' : __t) +
',\nquestionType: \'' +
__e(questionType) +
'\',\ninteraction: Sme.track.EVENT_VALUES.viewSolutionInteraction.watchSolution,\ncontentAccess: Sme.helpers.userHasRole(\'member\') ? Sme.track.EVENT_VALUES.contentAccess.paid : Sme.track.EVENT_VALUES.contentAccess.free,\noutcome: percent > 99 ? Sme.track.EVENT_VALUES.outcome.successful : Sme.track.EVENT_VALUES.outcome.unsuccessful,\nduration: videoDuration,\nvideoPlayTime: videoSeenTime,\npercent,\nnumberQuestions: Sme.helpers.getTopicQuestionQuestionCount(),\nnumberQuestionParts: Sme.helpers.getTopicQuestionQuestionPartCount(),\nquestionNumber: ' +
__e(questionNumber) +
',\nquestionNumberPart: ' +
__e(questionNumberPart) +
',\n});\n';
 } ;
__p += '\n};const unloadFunction = () => {\nlet percent = (videoSeenTime / videoDuration * 100).toFixed(2);\npercent = percent > 100 ? 100 : percent;\nsendEvents(percent);\nSme.track.clearInProgressEvents();\n};if( isFirstPlay ) {\nlet videoTracker = setInterval(async () => {\nlet percent = (videoSeenTime / videoDuration * 100).toFixed(2);\npercent = percent > 100 ? 100 : percent;\n/* if the video is not in the DOM, then track it, otherwise update seen time */const finishInterval = () => {\nsendEvents(percent);\nclearInterval(videoTracker);\nwindow.removeEventListener(\'beforeunload\', unloadFunction);\n}\nsecondsSincePlay++;\nif( secondsSincePlay > maxTimeUntilEvent ) {\nfinishInterval();\n}if (!player.element.contentWindow || percent > 99) {\nfinishInterval();\n} else {\nvideoSeenTime = await player.getCurrentTime();\n}\n}, 1000);window.addEventListener(\'beforeunload\', unloadFunction);\n}\nisFirstPlay = false;\n});\n} catch(e) {\nconsole.log( \'Warning #45343344334.\', e );\n}\n}\n},\nerror: function( XMLHttpRequest, textStatus, errorThrown ) { // http failure of somekind or not json\nconsole.log( \'Video error #4893894: \', errorThrown );\nconsole.log( XMLHttpRequest.responseText );\nalert( \'Error #839444: Failed loading video. Please refresh and try again or contact us if this persists.\' );\n}\n} );\n});\n</script>\n</div>';

}
return __p
};

this["JST"]["public/resource-nav-depth"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


if ( 'undefined' === typeof thisLevel[ depths[ currentDepth ] + 's' ] ) {
return;
}for ( let [thisSlug, thisLevelData] of Object.entries( thisLevel[ depths[ currentDepth ] + 's' ] ) ) {
// console.log( 'thisLevelData', thisLevelData );
let isActive = false;
if ( thisSlug == breadcrumbs.slugs[ depths[currentDepth] ] ) {
isActive = true;
}
// Replace null portions of URL hierarchy with a dash placeholder. This indicates a null.
if ( 'null' == thisSlug ) {
thisSlug = '-';
}
let suppressSubarea = false;
if ( 'questions' === simpleType ) {
suppressSubarea = true;
}
// Check if there are children items deeper and add children class if so for arrow.
let childrenClass = '';
let parentClass = '';
// if ( false === suppressSubarea ) {
if ( 'undefined' !== typeof thisLevelData[ depths[ currentDepth+1 ] + 's' ] ) {
if ( Object.entries( thisLevelData[ depths[ currentDepth+1 ] + 's' ] ).length > 0 ) {
// If at topic, then check if subtopic and/or are have a non-blank title. Only mark as having children if there's title at one of those depths.
let foundASubtopicOrAreaTitle = false;
// console.log( 'depth-34434', depths[ currentDepth ] );
if ( 'topic' === depths[ currentDepth ] ) { // at topic level only display children if there is a title at subtitle and/or area depth.
// console.log( 'AT topic depth' );
subtopicLoop: // label so that both for loops and break all the way out.
for( const [subtopicSlug,subtopic] of Object.entries( thisLevelData[ 'subtopics' ] ) ) {
// console.log( 'scanning subtopic' );
if ( null !== subtopic.title ) {
// console.log( 'found subtopic title: ' + subtopic.title, subtopic );
foundASubtopicOrAreaTitle = true;
break subtopicLoop;
}
for( const [areaSlug,area] of Object.entries( subtopic[ 'areas' ] ) ) {
// console.log( 'scanning area' );
if ( null !== area.title ) {
// console.log( 'found area title: ' + area.title );
foundASubtopicOrAreaTitle = true;
break subtopicLoop;
}
}
}
if ( true === foundASubtopicOrAreaTitle ) {
// console.log( 'YES FOUND KIDS' );
childrenClass = 'children';
parentClass = 'parent';
}
} else { // for all other depths assume having children means there are really children to display.
childrenClass = 'children';
parentClass = 'parent';
}
}
}
// }
let aClass = '';
if ( isActive )  {
if ( null === thisLevelData.title ) {
aClass = 'active initial hide';
} else {
aClass = 'active initial';
}
} else {
if ( null === thisLevelData.title ) {
aClass = 'hide';
}
}
if ( '' !== parentClass ) {
aClass += ' ' + parentClass;
}
// console.log( 'sub-32333', suppressSubarea, depths[ currentDepth ] );
if ( ( true === suppressSubarea ) && ( 'area' === depths[ currentDepth ] ) ) { // hides the next ul.
childrenClass = childrenClass + ' suppress';
}
;
__p += '\n<li data-' +
__e(depths[ currentDepth ]) +
'="' +
__e(thisSlug) +
'">\n<a class="' +
((__t = (aClass)) == null ? '' : __t) +
'" href="' +
__e(currentPath + thisSlug + '/') +
'">' +
((__t = ( memberScore( thisLevelData ) )) == null ? '' : __t) +
'' +
__e(thisLevelData.title) +
'</a>\n<ul class="' +
__e( depths[ currentDepth+1 ] ) +
's ' +
__e(childrenClass);
 if ( isActive ) { ;
__p += ' active initial';
 } ;
__p += '">' +
((__t = ( Sme.template( 'public/resource-nav-depth', { currentPath: currentPath + thisSlug + '/', depths: depths, currentDepth: (currentDepth+1), breadcrumbs: breadcrumbs, thisLevel: thisLevelData, memberScore: memberScore, simpleType: simpleType } ) )) == null ? '' : __t) +
'</ul>\n</li>\n';
 } ;


}
return __p
};

this["JST"]["public/resource-nav"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- Styled by: public/resources-nav.css --><nav class="resources-nav">';

if ( 'undefined' === typeof memberScore ) {
memberScore = function() { return ''; };
}
let currentPath = '/' + breadcrumbs.slugs.level + '/' + breadcrumbs.slugs.subject + '/' + breadcrumbs.slugs.board + '/' + breadcrumbs.slugs.year + '/' + breadcrumbs.slugs.resource + '/';
let depths = [ 'section', 'topic', 'subtopic', 'area', 'subarea' ];
let currentDepth = 0;
;
__p += '\n<ul class="sections">\n' +
((__t = ( Sme.template( 'public/resource-nav-depth', { currentPath: currentPath, depths: depths, currentDepth: 0, breadcrumbs: breadcrumbs, thisLevel: resourceListing, simpleType: simpleType, breadcrumbs: breadcrumbs, memberScore: memberScore } ) )) == null ? '' : __t) +
'\n</ul>\n</nav><script>\n$(function() {\n$( \'.resources-nav\' ).on( \'click\', function(e){\nlet target = $(e.target);\nlet nextUl = target.next( \'ul\' );\nif ( ( 0 === nextUl.length ) || ( nextUl.is( \':empty\' ) ) ) { // No expand/collapse at this level.\nreturn;\n}\nif ( nextUl.hasClass( \'suppress\' ) ) {\nreturn;\n}\nif ( ! target.hasClass( \'parent\' ) ) {\nreturn;\n}\n// Intercept clicks.\ne.preventDefault();\ne.stopPropagation();\nif ( ! nextUl.hasClass( \'active\' ) ) {\ntarget.addClass( \'active\' ); // Add active class to link.\nnextUl.show().addClass( \'activating\' ); // Temporary placement to calculate height for animation.\nlet newHeight = nextUl.outerHeight();\nnextUl.show().removeClass( \'activating\' ).addClass( \'active\' ).css( \'height\', \'0\' ); // Display but with no height.\nsetTimeout( function(){ // In timeout to force animation applying in next tick.\nnextUl.css( \'height\', newHeight ); // Set full height.\nsetTimeout( function(){\nnextUl.css( \'height\', \'\' ); // Remove defined height after animation.\n}, 200 );\n}, 0 );\n} else {\ntarget.removeClass( \'active\' ); // Remove active class from link.\nnextUl.css( \'height\', nextUl.outerHeight() ); // Set current height (since auto cannot animate).\nsetTimeout( function(){ // In timeout to force animation applying in next tick.\nnextUl.css( \'height\', \'0\' );\nsetTimeout( function(){\nnextUl.removeClass( \'active\' ).css( \'height\', \'\' ); // Remove defined height after animation.\n}, 200 );\n}, 0 );\n}\n});\n});\n</script>';

}
return __p
};