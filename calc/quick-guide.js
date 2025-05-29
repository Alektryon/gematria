// ======================== Quickstart Guide ========================

function closePanel(el) {
	$('#darkOverlay').remove();
	$(el).remove();
	$('body').removeClass('noScroll') // restore scrolling
}

function gematroVersionFull() {
	var v = gematroVersion.split('.')
	var m = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	return `${m[v[1]]} ${v[2]}, 20${v[0]}`
}

function displayQuickstartGuide() {
	$('<div id="darkOverlay" onclick="closePanel(&quot;.quickGuide&quot;)"></div>').appendTo('body'); // overlay

	var o = '<div class="quickGuide">'
	o += '<p>'
	o += '<span class="qgBold2">Quickstart Guide</span>'
	o += '<br>'
	o += '<span class="qgVer">GEMATRO '+gematroVersion+' ('+gematroVersionFull()+')<br><i>&#x21B3; Edited by Alektryon (March 17, 2025)</i></span>'
	o += '</p>'

	o += '<hr class="numPropSeparator">'
	
	o += '<p class="qgMedium">Phrase Box - enter any word, phrase or number</p>'
	o += '<ul>'
	o += '<li><span class="qgBold">"Enter"</span> - add phrase to history table</li>'
	o += '<li><span class="qgBold">"Up"</span> and <span class="qgBold">"Down"</span> arrow keys - select phrase from history table'
	o += '<br>'
	o += 'Press <span class="qgBold">"Down"</span> to select previously entered phrase</li>'
	o += '<li><span class="qgBold">"Delete"</span> - delete current phrase from history table</li>'
	o += '<li>Additional Shortcuts:'
	o += '<br>'
	o += '<span class="qgBold">"Home"</span> - clear history table'
	o += '<br>'
	o += '<span class="qgBold">"End"</span> - shortcut for <span class="qgBold">"Enter As Words"</span> function</li>'
	o += '</ul>'

	o += '<p class="qgMedium">Highlight Box - enter space delimited numbers</p>'
	o += '<ul>'
	o += '<li><span class="qgBold">"Enter"</span> - activate filter (remove nonmatching phrases and ciphers)</li>'
	o += '<li><span class="qgBold">"Delete"</span> - clear box contents (does not reset filter)'
	o += '<br>'
	o += '<span class="qgNote">Note: Reset filter with an "X" button near the box</span></li>'
	o += '<li>Additional Shortcuts:'
	o += '<br>'
	o += '<span class="qgBold">"Insert"</span> - find all available matches'
	o += '<br>'
	o += '<span class="qgBold">"Ctrl + Delete"</span> - reset filter and revert to initial history state'
	o += '<br>'
	o += '<span class="qgNote">Note: Type "0 0" or "Ctrl + Left Click" on "0" cell twice to highlight zero'
	o += '<br>'
	o += 'History table is recalculated on each keystroke</span></li>'
	o += '</ul>'

	o += '<p class="qgMedium">Enabled Ciphers Table</p>'
	o += '<ul>'
	o += '<li><span class="qgBold">"Left Click"</span> on cipher name - choose cipher, display detailed word breakdown</li>'
	o += '<li><span class="qgBold">"Right Click"</span> on cipher name - disable cipher</li>'
	o += '<li><span class="qgBold">"Ctrl + Right Click"</span> on cipher name - reorder ciphers, select the same cipher to cancel</li>'
	o += '<li><span class="qgBold">"Left Click"</span> on number - show number properties</li>'
	o += '<li><span class="qgBold">"Right Click"</span> on number - show additional number properties</li>'
	o += '</ul>'

	o += '<p class="qgMedium">Number Properties</p>'
	o += '<ul>'
	o += '<li><span class="qgBold">"Ctrl"</span> key pressed, mouse over number - show number properties</li>'
	o += '<li><span class="qgBold">"Shift"</span> key pressed, mouse over number - show additional number properties</li>'
	o += '<li>All properties are supported only for values up to 100,000</li>'
	o += '<li>Drag cursor across the tooltip to close it or simply click outside'
	o += '<br>'
	o += '<span class="qgNote">Note: Number Properties are available inside Enabled Ciphers Table, History Table and Query Table</span></li>'
	o += '</ul>'

	o += '<p class="qgMedium">Cipher/Breakdown Chart</p>'
	o += '<ul>'
	o += '<li><span class="qgBold">Cipher Chart</span> can be used as a virtual keyboard</li>'
	o += '<li><span class="qgBold">"Left Click"</span> on top left corner for <span class="qgBold">Space</span>, top right corner for <span class="qgBold">Backspace</span></li>'
	o += '<li><span class="qgBold">"Left Click"</span> on Cipher Name to switch to uppercase letters</li>'
	o += '<li><span class="qgBold">"Left Click"</span> on letters to type</li>'
	o += '<li><span class="qgBold">"Left Click"</span> on numbers/letters to highlight cells (<span class="qgBold">Breakdown Chart</span>)</li>'
	o += '</ul>'

	o += '<p class="qgMedium">History Table</p>'
	o += '<ul>'
	o += '<li><span class="qgBold">"Right Click"</span> on phrase - open <span class="qgBold">Context Menu</span> to edit existing entries</li>'
	o += '<li><span class="qgBold">"Left Click"</span> on value - toggle blinking effect (temporary)</li>'
	o += '<li><span class="qgBold">"Right Click"</span> on value - toggle cell visibility (temporary)</li>'
	o += '<li><span class="qgBold">"Shift + Left Click"</span> on cipher name - disable cipher</li>'
	o += '<li><span class="qgBold">"Shift + Left Click"</span> on phrase - delete phrase from history</li>'
	o += '<li><span class="qgBold">"Ctrl + Left Click"</span> on phrase - load phrase into <span class="qgBold">Phrase Box</span></li>'
	o += '<li><span class="qgBold">"Ctrl + Right Click"</span> on phrase - reorder phrases, select the same phrase to cancel</li>'
	o += '<li><span class="qgBold">"Ctrl + Left Click"</span> on value (cell) - toggle highlighting for number'
	o += '<br>'
	o += 'Highlighter always recalculates table, temporary effects are removed'
	o += '<br>'
	o += '<span class="qgNote">Note: Click on cell, not on the number itself, otherwise you will open number properties</span></li>'
	o += '</ul>'

	o += '<hr class="numPropSeparator">'
	o += '<p><span class="qgBold2">Options</p>'

	o += '<ul>'

	o += '<li>'
	o += '<span class="qgBold">"Number Calculation"</span>'
	o += '<ul>'
	o += '<li>Full (123 = 123) - <span class="qgBold">default</span></li>'
	o += '<li>Reduced (123 = 1+2+3 = 6)</li>'
	o += '<li>Off</li>'
	o += '</ul>'
	o += '</li>'

	o += '<li><span class="qgBold">"Matrix Code Rain"</span> - use dynamic background</li>'
	o += '<li><span class="qgBold">"Gradient Charts"</span> - toggle fill style for <span class="qgBold">"Word Breakdown"</span> and <span class="qgBold">"Cipher Chart"</span></li>'
	o += '<li><span class="qgBold">"Rounded Interface"</span> - use rounded corners for menus, buttons and charts</li>'
	o += '<li><span class="qgBold">"UI Border Thickness"</span> - change border width for user interface elements</li>'

	o += '<li>'
	o += '<span class="qgBold">Highlighter</span> has two different modes:'
	o += '<ul>'
	o += '<li><span class="qgBold">"Cross Cipher Match"</span></li>'
	o += '<li><span class="qgBold">"Same Cipher Match"</span>'
	o += '<br>'
	o += '<span class="qgNote">Note: If there is just one value, only "Cross Cipher Match" will pick that</span></li>'
	o += '</ul>'
	o += '</li>'

	o += '<li><span class="qgBold">"Show Only Matching"</span> - when highlighter is active, sets opacity of nonmatching values to zero</li>'

	o += '<li>'
	o += '<span class="qgBold">"Numerology Mode"</span> - show <span class="qgBold">Numerology</span> breakdown in <span class="qgBold">History Table</span>'
	o += '<br>'
	o += '<span class="qgNote">Note: Highlighter is disabled in this mode, click on numbers manually to add a blinking effect to matching values</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Show Special Numbers"</span> - underline numbers with <span class="qgBold">special</span> properties'
	o += '<br>'
	o += '<span class="qgNote">Prime, Fibonacci, Triangular, Square and Star numbers</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Dotless Latin ı as i"</span> - when enabled, dotless lowercase Latin letter <span class="qgBold">ı</span> uses the same value as regular lowercase Latin letter <span class="qgBold">i</span> for gematria calculation'
	o += '<br>'
	o += '<span class="qgNote">Note: This letter is used in the Latin-script alphabets of Azerbaijani, Crimean Tatar, Gagauz, Kazakh, Tatar and Turkish</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Ignore Comments [...]"</span> - exclude any text inside square brackets from gematria calculation'
	o += '<br>'
	o += '<span class="qgNote">Note: Comments are preserved on export/import</span>'
	o += '</li>'

	o += '<li><span class="qgBold">"New Phrases Go First"</span> - new phrases are inserted at the beginning of <span class="qgBold">History Table</span></li>'
	
	o += '<li>'
	o += '<span class="qgBold">"Live Database Mode"</span> - disable this option to generate a precalculated database on file import'
	o += '<br>'
	o += '<span class="qgNote">Note: More information is available in the "Databases" section of this guide</span>'
	o += '</li>'

	o += '<li><span class="qgBold">"Switch Ciphers (CSV)"</span> - enable previously selected ciphers on history file import</li>'

	o += '<li><span class="qgBold">"Phrases on DB page"</span> - specify the amount of phrases on one page of <span class="qgBold">Database</span> query results</span></li>'
	o += '<li><span class="qgBold">"Scroll DB by lines"</span> - set scrolling speed inside <span class="qgBold">Database</span> query results</span></li>'

	o += '<li><span class="qgBold">"Letter/Word Count"</span> - show number of recognized (by current cipher) letters and words</li>'
	o += '<li><span class="qgBold">"Word Breakdown"</span> - show detailed breakdown for current phrase</li>'
	o += '<li><span class="qgBold">"Compact Breakdown"</span> - do not show full phrase (plain text) inside breakdown table</li>'
	o += '<li><span class="qgBold">"Cipher Chart"</span> - show a table of correspondences between letters and values for current cipher</li>'
	
	o += '</ul>'

	o += '<hr class="numPropSeparator">'
	o += '<p><span class="qgBold2">Features</p>'

	o += '<p class="qgMedium">Gematria Calculation</p>'

	o += '<ul>'

	o += '<li>'
	o += '<span class="qgBold">Regular (default)</span> - each character is substituted with a corresponding value and values for all characters in phrase are simply added together'
	o += '<br>'
	o += '<span class="qgNote">\'Full\' and \'Reduced\' Number Calculation modes are available only for \'Regular\' mode</span>'
	o += '</li>'

	o += '<li><span class="qgBold">Multiplication</span> - each character value is multiplied by its position in a phrase (based on Mispar Ha\'achor)</li>'

	o += '<li>'
	o += '<span class="qgBold">Reversed Multiplication</span> - each character value is multiplied by its position in a phrase counting from the last character (based on Mispar Bone\'eh)'
	o += '<br>'
	o += '<span class="qgNote">More information on these methods - <a class="qgNote" target="_blank" href="https://torahcalc.com/info/gematria/">https://torahcalc.com/info/gematria/</a></span>'
	o += '</li>'

	o += '</ul>'

	o += '<p class="qgMedium">Date Calculator</p>'

	o += '<ul>'

	o += '<li>'
	o += 'Calculate interval between two dates according to Gregorian calendar, supports <span class="qgBold">Add/Subtract</span> mode'
	o += '<br>'
	o += '<span class="qgNote">Note: Make sure to consult timeanddate.com or other websites for precise calculations for old dates or other calendars (e.g. Julian)</span>'
	o += '</li>'
	
	o += '<li><span class="qgBold">Left Click</span> on <span class="qgBold">"From"</span> or <span class="qgBold">"to"</span> label to set a custom date description</li>'
	o += '<li><span class="qgBold">Left Click</span> to highlight line with date durations</li>'

	o += '<li>'
	o += '<span class="qgBold">Right Click</span> to remove line with date durations'
	o += '<br>'
	o += '<span class="qgNote">Note: Toggle "Include End Date" checkbox to bring the removed lines back</span>'
	o += '</li>'

	o += '<li>'
	o += 'You can <span class="qgBold">import</span> a text file to calculate durations between multiple dates at once.'
	o += '<br>'
	o += 'One date per line, <span class="qgBold">M/D/YYYY</span> format, comments are optional:'
	o += '<br>'
	o += '<br>'
	o += 'GEMATRO_DATES'
	o += '<br>'
	o += '1/28/2006 [comment]'
	o += '<br>'
	o += '11/7/1968 [comment]'
	o += '</li>'

	o += '</ul>'

	o += '<p class="qgMedium">Color Controls</p>'
	o += '<ul>'
	o += '<li>Change interface, font or cipher colors (<span class="qgBold">HSL</span> - Hue, Saturation, Lightness)</li>'
	o += '<li>Make sure to <span class="qgBold">"Save Settings"</span> or <span class="qgBold">"Export Settings (JS)"</span> before you make any modifications inside <span class="qgBold">"Edit Ciphers"</span> menu</li>'
	o += '</ul>'

	o += '<p class="qgMedium">Edit Ciphers</p>'

	o += '<ul>'

	o += '<li><span class="qgBold">"Left Click"</span> on cipher name in <span class="qgBold">Enabled Ciphers Table</span> to edit existing cipher or to create a new cipher based on existing one</li>'
	o += '<li>Cipher names are unique; if current cipher name matches an existing cipher, that very cipher is edited</li>'

	o += '<li>'
	o += 'Existing cipher can be moved to a different or new category by updating it with a different category name (it will be added as the last item in that category)'
	o += '<br>'
	o += '<span class="qgNote">Ciphers can be rearranged with \'Ctrl + Right Click\' inside \'Enabled Ciphers Table\''
	o += '<br>'
	o += 'Otherwise, you can manually edit exported \'ciphers.js\' file</span>'
	o += '</li>'

	o += '<li>Any new cipher category can be created; empty categories with no ciphers are removed automatically</li>'
	o += '<li>Cells with individual letters or values can be modified</li>'
	o += '<li><span class="qgBold">"Color Controls"</span> are reset on any change in <span class="qgBold">"Edit Ciphers"</span> menu, make sure you do not have any unsaved changes</li>'

	o += '<li>'
	o += '<span class="qgBold">All Unicode</span> characters are supported, including emoji'
	o += '<br>'
	o += '<span class="qgNote">Emoji with U+200D Zero Width Joiner, U+FE0F Variation Selector or Fitzpatrick skin tones are split into base components</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">Wheel Cipher</span> mode supports letters instead of values'
	o += '<br>'
	o += '<span class="qgNote">\'a\' = \'b\', \'b\' = \'c\', \'c\' = \'d\''
	o += '<br>'
	o += '\'abc\' = a(b) + b(c) + c(d) = \'bcd\''
	o += '<br>'
	o += '\'Multiply\', \'Rev. Mult.\' and \'Number Calculation\' are disabled</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">Multi Character</span> cipher keys are supported, the longest syllable is always calculated first'
	o += '<br>'
	o += '<span class="qgNote">Example: \'a\' = 100, \'ab\' = 10, \'abc\' = 1'
	o += '<br>'
	o += '\'abcaba\' = abc(1) + ab(10) + a(100) = 111'
	o += '<br>'
	o += 'Can be combined with Case Sensitive and Wheel Cipher modes'
	o += '<br>'
	o += '\'Multiply\', \'Rev. Mult.\' and \'Number Calculation\' are disabled</span>'
	o += '</li>'

	o += '</ul>'

	o += '<p class="qgMedium">Encoding</p>'

	o += '<p>'
	o += 'Encoder supports <span class="qgBold">3 different modes</span>, all of which can work with Regular or Multiplicative <span class="qgBold">Gematria Calculation</span> modes. <span class="qgBold">Wheel Ciphers</span> are not supported.'
	o += '<br>'
	o += 'Positive values are supported; use <span class="qgBold">-0</span> as a matching value for zero.'
	o += '<br>'
	o += 'Read section about <span class="qgBold">Databases</span> for additional information and <span class="qgBold">Query Table</span> tips.'
	o += '</p>'

	o += '<ul>'

	o += '<li>'
	o += '<span class="qgBold">Syllables (default)</span> - syllables generated from <span class="qgBold">"Alphabet"</span> and <span class="qgBold">"Vowels"</span> fields (excluding letters from <span class="qgBold">"Exclude"</span> field) are used to create a matching phrase. You can type <span class="qgBold">start;end</span> or <span class="qgBold">start;</span> or <span class="qgBold">;end</span> inside <span class="qgBold">Phrase Box</span> to construct a complex phrase'
	o += '<br>'
	o += '<span class="qgNote">Note: Anagrams are available for Regular gematria calculation mode only. Use "Odd letters" option to switch between even/odd phrase length</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">Database (1 phrase)</span> - uses a single phrase from currently loaded <span class="qgBold">Live Database</span>. You can use <span class="qgBold">start;end</span> constructor (and its variations) in the <span class="qgBold">Phrase Box</span>'
	o += '<br>'
	o += '<span class="qgNote">Note: Make sure that gematria value of current (additional) text in the Phrase Box is less than matching value, otherwise no results will be found</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">Database (2 phrases)</span> - uses two phrases from currently loaded <span class="qgBold">Live Database</span>. You can use <span class="qgBold">start;middle;end</span> constructor (and its variations, e.g. <span class="qgBold">;;end</span>) in the <span class="qgBold">Phrase Box</span>'
	o += '<br>'
	o += '<span class="qgNote">Note: This mode is very computationally expensive and can be really slow on some devices (Firefox can be ~7x slower compared to Chrome, try different browsers). It is not recommended to use a database with more than 20,000 entries (n<sup>2</sup> combinations). If this mode is used with Multiplicative gematria calculation mode, it becomes even slower. Encoding (2 phrases) for ciphers with negative values is the slowest mode, it can take minutes, so use a smaller database or one phrase mode</span>'
	o += '</li>'
	
	o += '</ul>'

	o += '<p>'
	o += '<span class="qgBold">"Set Table Caption"</span> - use custom <span class="qgBold">History Table</span> caption inside the top left cell'
	o += '</p>'

	o += '<p>'
	o += '<span class="qgBold">"Find Matches"</span> - populate <span class="qgBold">Highlight Box</span> with numbers that match at least twice inside <span class="qgBold">History Table</span>'
	o += '<br>'
	o += '<span class="qgNote">Note: Cipher filter is not applied, you can press "Enter" inside Highlight Box to show matching ciphers only</span>'
	o += '</p>'

	o += '<p>'
	o += '<span class="qgBold">"Enter As Words"</span> - read text from <span class="qgBold">Phrase Box</span> one word at a time until a certain phrase length is reached, then move on to the next starting word, process is repeated until all words are entered into <span class="qgBold">History Table</span>'
	o += '<br>'
	o += '<span class="qgNote">Note: Change "Word limit" value to specify maximum phrase length</span>'
	o += '</p>'

	o += '<p>'
	o += '<span class="qgBold">"Clear History"</span> - remove all entries from <span class="qgBold">History Table</span>'
	o += '</p>'

	o += '<hr class="numPropSeparator">'
	o += '<p><span class="qgBold2">Export</p>'

	o += '<ul>'

	o += '<li>'
	o += '<span class="qgBold">"Print Cipher Chart", etc</span> - render corresponding element as an image (PNG), image preview is opened first'
	o += '<br>'
	o += '<span class="qgNote">Note: If text or table are misaligned, click "Refresh" button to generate a new image</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Import File"</span> - import a <span class="qgBold">.txt</span> file (one phrase per line), previously exported CSV history, exported matches or user ciphers'
	o += '<br>'
	o += '<span class="qgNote">Note: You can also drag and drop file into Phrase Box</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Create Database (TXT)"</span> - convert a <span class="qgBold">.txt</span> file into <span class="qgBold">Live Database</span> format'
	o += '<br>'
	o += '<span class="qgNote">Note: Database contains unique words which are sorted by alphabetical order</span>'
	o += '</li>'

	o += '<li><span class="qgBold">"Export History (CSV)"</span> - export phrases from current history table as a CSV file, semicolon is used as separator, first row contains cipher names</li>'

	o += '<li>'
	o += '<span class="qgBold">"Export Matches (TXT)"</span> - export all available matches from current history table as a text file, current highlighter mode (<span class="qgBold">"Cross Cipher Match"</span> or <span class="qgBold">"Same Cipher Match"</span>) is used during export'
	o += '<br>'
	o += '<span class="qgNote">Note: Matches can be imported back into calculator</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Save/Load/Reset"</span> - save, load or reset current calculator and ciphers settings for this browser (localStorage)'
	o += '<br>'
	o += '<span class="qgNote">Note: Use "Reset" twice to clear all localStorage. Saved settings do not persist if you clear cache, use Incognito mode or a different browser on the same device</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Export Settings (JS)"</span> - export current calculator settings and ciphers as a separate file. Ciphers active at the moment of export become the new default ones'
	o += '<br>'
	o += '<span class="qgNote">Note: You can edit file manually with a text editor, make sure to keep formatting'
	o += '<br>'
	o += 'Any changes made to options or menu settings are saved as well'
	o += '<br>'
	o += 'If you want to permanently change settings, you can download an offline version of the calculator from GitHub repository and replace "ciphers.js" file inside "calc" directory'
	o += '<br>'
	o += 'Online and offline versions are identical</span>'
	o += '</li>'

	o += '</ul>'

	o += '<hr class="numPropSeparator">'
	o += '<p><span class="qgBold2">Databases</p>'

	o += '<ul>'

	o += '<li>'
	o += 'Import a properly formatted <span class="qgBold">.txt</span> file to activate database query mode. <span class="qgBold">Live Database Mode</span> is used by default, however <span class="qgBold">GEMATRO</span> can generate a precalculated database as well'
	o += '<br>'
	o += '<span class="qgNote">Note: File should contain one phrase per line, the first line must be'
	o += '<br>'
	o += 'CREATE_GEMATRO_DB</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Ignore Comments [...]"</span> flag affects database generation'
	o += '<br>'
	o += '<span class="qgNote">Note: When database is loaded, calculator should use the same mode of "Ignore Comments [...]" as at the moment of database generation, otherwise values inside database and calculator will differ. The same is valid for number calculation settings</span>'
	o += '</li>'

	o += '<li>'
	o += 'Precalculated (CSV) database can be generated when <span class="qgBold">"Live Database Mode"</span> is disabled. Database will have values only for currently selected ciphers. Those ciphers (and calculator options) are stored inside the database as well (at the end of file).'
	o += '<br>'
	o += '<span class="qgNote">Note: When precalculated database is loaded, calculator will allow to use only those ciphers which are available inside that database'
	o += '<br>'
	o += 'For example, if you load a database that contains values only for English Ordinal cipher, English Ordinal becomes the only available cipher for any calculations until you unload the database. "Live Database Mode" calculates all values on the fly and can work with any ciphers, however this mode is slower and there is no separate file with precalculated gematria values</span>'
	o += '</li>'

	o += '<li>'
	o += 'After you import a properly formatted <span class="qgBold">.txt</span> file for database generation, calculation will start immediately and a dialog offering to save a new precalculated database will appear'
	o += '<br>'
	o += '<span class="qgNote">Note: Process may take some time, please be patient</span>'
	o += '</li>'

	o += '<li>'
	o += 'When a database is imported, new elements become available:'
	o += '<ul>'
	o += '<li><span class="qgBold">"Query"</span> - match current phrase or number against database</li>'
	o += '<li><span class="qgBold">"Clear DB Query" (Features)</span> - close current <span class="qgBold">Query Table</span> and switch back to centered interface</li>'
	o += '<li><span class="qgBold">"Unload Database" (Features)</span> - unload database and restore initial ciphers; <span class="qgBold">History Table</span> is preserved</li>'
	o += '<li><span class="qgBold">"Export DB Query (CSV)" (Export)</span> - save matching phrases from database as a CSV file</li>'
	o += '</ul>'
	o += '</li>'

	o += '<li><span class="qgBold">"Cipher Edit"</span> (and rearrangement) is not available when a precalculated database is loaded</li>'

	o += '<li>'
	o += 'Current highlighter mode (<span class="qgBold">"Cross Cipher Match"</span> or <span class="qgBold">"Same Cipher Match"</span>) controls database query'
	o += '<br>'
	o += '<span class="qgNote">Note: "Show Only Matching" option hides nonmatching values as well</span>'
	o += '</li>'

	o += '<li>Query is based on current cipher selection; there is no limit for the amount of enabled ciphers</li>'

	o += '<li>Input any phrase into the <span class="qgBold">"Phrase Box"</span> and press <span class="qgBold">"Query"</span> button to match against currently loaded database</li>'

	o += '<li>'
	o += 'Numerical input is supported, several numbers are recognized as well:'
	o += '<br>'
	o += '<span class="qgBold">74 0 142</span>'
	o += '<br>'
	o += '<span class="qgNote">Note: In the example above, the first enabled cipher will be matched against 74 and the third cipher will be matched against 142</span>'
	o += '</li>'

	o += '</ul>'

	o += '<p class="qgMedium">Query Table</p>'

	o += '<ul>'

	o += '<li>'
	o += 'Use <span class="qgBold">Search Bar</span> to filter results'
	o += '<ul>'
	o += '<li>'
	o += '<span class="qgBold">"Enter"</span> - apply filter'
	o += '<br>'
	o += '<span class="qgNote">Note: If box is empty, filter is cleared</span>'
	o += '</li>'
	o += '<li><span class="qgBold">"Delete"</span> - clear filter</li>'
	o += '</ul>'
	o += '<span class="qgNote">Note: Search is case sensitive, regular expressions are supported</span>'
	o += '</li>'

	o += '<li><span class="qgBold">Query Table</span> is <span class="qgBold">touch scrollable</span> (mobile), entries are scrolled page by page</li>'

	o += '<li>'
	o += 'Use <span class="qgBold">"Up"</span> and <span class="qgBold">"Down"</span> arrow keys to scroll one page at a time'
	o += '<br>'
	o += '<span class="qgNote">Note: Up/Down arrow keys work only when input is focused inside textbox with current index</span>'
	o += '</li>'

	o += '<li>Use <span class="qgBold">Mouse Wheel</span> for precise scrolling</li>'

	o += '<li>A horizontal scroll bar above the table can be used for navigation as well or you can input the exact position inside the box with index</li>'

	o += '<li>'
	o += 'Drag the bottom-right corner of the <span class="qgBold">Query Table</span> to resize it'
	o += '<br>'
	o += '<span class="qgNote">Hint: Extend the table in case if long phrases do not fit on one line</span>'
	o += '</li>'

	o += '<li><span class="qgBold">"Right Click"</span> on phrase - open <span class="qgBold">Context Menu</span> with additional options</li>'
	o += '<li><span class="qgBold">"Ctrl + Left Click"</span> on phrase - load phrase from <span class="qgBold">Query Table</span> into <span class="qgBold">Phrase Box</span> and add it to <span class="qgBold">History Table</span></li>'

	o += '<li>'
	o += '<span class="qgBold">"Left Click"</span> on <span class="qgBold">[x]</span> button in the top left corner to close the <span class="qgBold">Query Table</span>'
	o += '<br>'
	o += '<span class="qgNote">Another way to close the Query Table is to click on "Features" > "Clear DB Query"</span>'
	o += '</li>'

	o += '<li>'
	o += '<span class="qgBold">"Left Click"</span> on <span class="qgBold">[_]</span> button in the top right corner to temporarily minimize the <span class="qgBold">Query Table</span>'
	o += '<br>'
	o += '<span class="qgNote">Note: Left click on the Query Table to bring it back<br>Hint: You can zoom the page out if too many ciphers are active</span>'
	o += '</li>'
	
	o += '</ul>'

	o += '</div>'

	$(o).appendTo('body'); // guide
	$('body').addClass('noScroll') // prevent scrolling
}

function displayCiphInfo() {
	$('<div id="darkOverlay" onclick="closePanel(&quot;.cipherInfo&quot;)"></div>').appendTo('body'); // overlay

	var o = '<div class="cipherInfo">'
	o += '<p><span class="qgBold2">Information on Ciphers & Suggested Bibliography</p><br>'

	o += '<hr class="numPropSeparator">'

	o += '<ul><li><a class="qgLink" href="https://gematriaresearch.blogspot.com/">Gematria Research by Luís Gonçalves</a><br><span class="qgNote">History of neglected ciphers and methods used in the practice of gematria</span></li></ul>'
	
	o += '<hr class="numPropSeparator">'

	o += '<p class="qgMedium">Modern English Ciphers:</p>\n<ul><p><br><i>Used with the modern English alphabet with 26 letters.</i><br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/03/history-of-ciphers-part-2-baconian.html" target="_blank">History of Ciphers (part 2) - The Baconian Ciphers</a></span><br><br><li><span class="qgBold">Standard</span> - follows the numerical sequence of units, tens and hundreds.<br><span class="qgNote">This is the traditional system of numerical equivalences for the letters as it is used in Hebrew Gematria, Greek Isopsephia, and the Arabic Abjad system.</span></li><br><li><span class="qgBold">Ordinal</span> - follows the sequence of natural numbers, starting at 1.</li><br><li><span class="qgBold">Reduction</span> - reduces the ordinal value of letters to a single digit.</li><br><li><span class="qgBold">Reverse</span> - reverses the alphabet, from Z to A.</li><br></ul>'

	o += '<hr class="numPropSeparator">'

	o += '<p class="qgMedium">Elizabethan English Ciphers:</p>\n<ul><p><br><i>Used with the Elizabethan English alphabet with 24 letters, in which I=J and U=V.</i><br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/03/history-of-ciphers-part-2-baconian.html" target="_blank">History of Ciphers (part 2) - The Baconian Ciphers</a></span><br><br><li><span class="qgBold">Kaye Cipher</span> - makes the 10th letter of the Elizabethan English alphabet correspond to the number 10.<br><span class="qgNote">This cipher was discovered by Mr. W. E. Clifton, a Baconian, with the help of two particular volumes from his collection of 17th century books — Thomas Powell’s "The Repertorie of Records" (1631) and a special edition of Rawley’s "Resuscitatio" (1671) of Bacon’s works — which alerted him to the fact that the cipher uses the twenty-six characters of the old alphabet primers, in which the Ampersand (‘&’) followed by ‘et’ was added to the twenty-four letter alphabet, and that K (which starts the counting) equals 10. Since the numbers 25 and 26 (which correspond to the ‘&’ and ‘et’) are treated as nulls, then A equals 27, B equals 28, etc.<br>– Further info: <a href="https://www.fbrt.org.uk/wp-content/uploads/2020/06/The_Fra_Rosie_Cross_Cipher_287.pdf" target="_blank">The Fra. Rosie Cross Cipher 287</a> (PDF — 758 KB)<br><br></span><li><span class="qgBold">Modern Kaye</span> - like the Elizabethan Kaye cipher, assigning the value 10 to the 10ᵗʰ letter of the modern English alphabet.</span><br><span class="qgNote">Iʼm not aware of the origin of this cipher, even though I like it because it delivers excellent results when applied in a Baconian / Rosicrucian / Shakespearean context.<br>– Further info: <a href="https://www.light-of-truth.com/ciphers.html" target="_blank">Baconian Ciphers</a> (Calculator at <a href="https://www.light-of-truth.com" target="_blank">Light-of-Truth.com</a>).</span></li><br></li></ul>'

	o += '<hr class="numPropSeparator">'

	o += '<p class="qgMedium">Latin Ciphers:</p>\n<ul><p><br><i>Used with the Classical Latin alphabet with 23 letters.</i></span><br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/03/history-of-ciphers-part-3-latin-ciphers.html" target="_blank">History of Ciphers (part 3) - The Latin Ciphers</a><br><br><li><span class="qgBold">Agrippa Key & Beatus of Liebana</span> - like Standard, both ciphers assign numerical values to the Latin letters in three scales: first the units, then the tens, and then the hundreds.<br><span class="qgNote">Note that in the Agrippa Key cipher, the 3 extra letters "J", "V" and "W" are put at the end of the alphabetical sequence, while in the Beatus cipher they are treated as being identical to the ones they were derived from, so that I=J=9 and U=V=W=200.</span></li><span class="qgNote">– Further info: Heinrich Cornelius Agrippa, <a href="http://esotericarchives.com/agrippa/agripp2b.htm" target="_blank">Of Occult Philosophy</a>, Book II, chapter XX, as well as John Opsopausʼ <a href="http://opsopaus.com/OM/BA/Iso-values.html" target="_blank">Alphabet Charts</a> at his brilliant website <a href="http://opsopaus.com/OM/BA/" target="_blank">Biblioteca Arcana</a>.</span><br><br><li><span class="qgBold">Cabala Simplex</span> - a late Latin / Italian cipher using a reduced alphabet with only 22 letters (no "K", so C=K).</li><span class="qgNote">– Further info: <a href="https://archive.org/details/bibliacabalisti01beglgoog/page/n27/mode/2up" target="_blank">Biblia Cabalistica, or The Cabalistic Bible</a> by Rev. Walter Begley.</span><br><br><li><span class="qgBold">Roman Numerals</span> - following Roman numerical notation, assigns values only to specific letters of the alphabet (I=1, V=5, X=10, etc).</li><span class="qgNote">Though frequently underestimated as a system of Gematria, Roman numerals have been historically used as a kind of cryptographic cipher, encoding specific values in seemingly normal text. Take for example the book "FaMa e sCanzIa ReDUX", published by Johannes Bureus in 1616: its title actually encodes the number of the year in which it was published, using precisely Roman numerals!</span><br><br></ul>'

	o += '<hr class="numPropSeparator">'

	o += '<p class="qgMedium">Thelemic Ciphers:</p>\n<ul><p><br><i>More frequently used in a Thelemic context, mostly in the analysis of Aleister Crowleyʼs <i>"Liber AL vel Legis"</i> (The Book of the Law).</i><br><span class="qgNote">– Further info: <a href="https://omegalogion.files.wordpress.com/2023/10/secrets-of-the-cipher-naughts-3.0.pdf" target="_blank">Secrets of the Cipher Naughts</a> (v3.0) by R. Leo Gillis (PDF – 1.7 MB).</span><br><br><li><span class="qgBold">English Qaballa</span> - also known as the "ALW" cipher and "NAEQ" (standing for "New Aeon English Qaballa"), it was discovered on November 26, 1976 by James Lees, and derives from counting the letters in cycles of eleven; thus after A=1 comes L=2, then W=3, until P=26.</span></li><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/05/history-of-ciphers-part-4a-thelemic.html" target="_blank">History of Ciphers (part 4a) - The Thelemic Ciphers (I)</a></span><br><br><li><span class="qgBold">Cipher X</span> - discovered by Edgar Joel Love, Cipher X is a base-3 inversion of English Qaballa.<br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/07/history-of-ciphers-part-4b-thelemic.html" target="_blank">History of Ciphers (part 4b) - The Thelemic Ciphers (II)</a><br>– Further info: <a href="http://thenot.weebly.com/cipher-x-and-liber-27.html" target="_blank">Cipher X and Liber 27</a> with commentary by E. Joel Love.</span><br><br></li><li><span class="qgBold">Trigrammaton Qabalah</span> - developed  by R. Leo Gillis using  Crowley’s  own  English-letter  attributions  to  the  27  trigrams  of <i>Liber  Trigrammaton sub figura XXVII</i>.<br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/07/history-of-ciphers-part-4b-thelemic.html" target="_blank">History of Ciphers (part 4b) - The Thelemic Ciphers (II)</a></span><br><br></li><li><span class="qgBold">Elevenfold Qabalah</span> - also known as "Abrahadabra Cipher", this is my own experimental Thelemic cipher. It is based on making a direct correspondence between the letters of the alphabet and the numbers from 1 to 11, restarting the cycle after 11 (so after K=11 comes L=1, M=2, etc, until Z=4).<br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/10/history-of-ciphers-part-4d-thelemic.html" target="_blank">History of Ciphers (part 4d) - The Thelemic Ciphers (IV)</a></span></li><br><li><span class="qgBold">Toavotea Key</span> - discovered by John Farthing II (Frater Omnia Redementur) on January 26, 2003, its name derives from the phrase <i>"The Order And Value Of The English Alphabet"</i>. It was based on the famous "grid" in the manuscript of the Book of the Law, though the process of its creation/discovery wasnʼt entirely clear; it seems to have been partly logical and partly intuitive.<br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/10/history-of-ciphers-part-4d-thelemic.html" target="_blank">History of Ciphers (part 4d) - The Thelemic Ciphers (IV)</a></span></li><br><li><span class="qgBold">Mars Kamea Gematria</span> - discovered by Frater RIKB in April 2003. Noting that there are 26 letters in the English Alphabet and 25 numbers in the Magic Square ("Kamea") of Mars, Frater RIKB took "A" as Zero, and then found the remaining correspondences by pasting the <i>"sheets"</i> (i.e. the letters) <i>"from right to left and from top to bottom"</i>, thus devising the Mars Kamea English Gematria.<br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/10/history-of-ciphers-part-4d-thelemic.html" target="_blank">History of Ciphers (part 4d) - The Thelemic Ciphers (IV)</a><br>– Further info: <a href="https://www.horusset.com/RIKB/Engematria.htm" target="_blank">Mars Kamea English Gematria</a> by Frater RIKB.</span></li><br><li><span class="qgBold">English Qabalah 31</span> - proposed by Shawn Knight, itʼs based on counting the letters in cycles of 31, so that after A=1 comes F=2, then K=3, P=4, etc, until V=26.<br><span class="qgNote">The choice of the number 31 is relevant in a Thelemic context, corresponding to the numerical value of "AL", a major key to the Book of the Law as discovered by Charles Stansfeld Jones ("Frater Achad") in his Liber 31.<br>– Further info: <a href="https://shawnomancy.com/gematria/eq31" target="_blank">English Qabalah 31</a> by Shawn Knight.</span><br><br><li><span class="qgBold">English Rose Cabala</span> - there isn’t much available information on how this cipher came to be, except that it was discovered by Steve Wilson around 1985.<br><span class="qgNote">– Further info: <a href="https://www.deathandhell.com/caballahrose.html" target="_blank">English Rose Cabala Diagram</a> and the <a href="https://www.deathandhell.com/archive/archive3.html" target="_blank">GoN-L Archives</a>.<br><br></span></li></ul>'

	o += '<hr class="numPropSeparator">'
	
	o += '<p class="qgMedium">Alphanumeric Ciphers:</p>\n<ul><p><br><i>Excluding Alphanumeric Qabbala, all these Alphanumeric ciphers are experimental and were devised by me. Their construction follows the same principles as other well-known ciphers (see below).</i><br><br><li><span class="qgBold">Alphanumeric Qabbala</span> - also known as "Alphanumeric Gematria", "Anglossic Qabbala", or simply "AQ", this is a continuous, non-redundant, alphanumeric sequence from 0 to Z. An expansion of Hexadecimal notation (0 to F) used as a system of English Gematria.<br><span class="qgNote">Note that the name of the cipher (AQ) explains what it is, since A=10 and Q=26, standing for the 10 Indo-Arabic numerals from 0 to 9, and the 26 English letters from A to Z.</span></li><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2023/02/the-wonders-magic-of-alphanumeric.html" target="_blank">The wonders & magic of Alphanumeric Qabbala</a><br>– Blog post: <a href="https://gematriaresearch.blogspot.com/2024/05/aq-and-liberlegis.html" target="_blank">Alphanumeric Qabbala & the Riddles of AL</a><br>– Futher info: <a href="http://hyperstition.abstractdynamics.org/archives/003609.html" target="_blank">Qabbala 101: Part 1</a> and the <a href="https://alektryon.github.io/aqqa/about/">"About AQ"</a> page at my online "AQQA" calculator.</span><br><br><li><span class="qgBold">Alphanumeric Primes</span> - in this cipher a direct correspondence is made between the 36 alphanumeric digits 0-Z and the sequence of prime numbers, so that 0 = 0ᵗʰ prime = 1, 1 = 1ˢᵗ prime = 2, etc, until Z = 35ᵗʰ prime = 149.</span><br><br><li><span class="qgBold">Alphanumeric Trigonal</span> - same principle as the previous cipher, but adapted to the sequence of trigonal (triangular) numbers.</span><br><br><li><span class="qgBold">Alphanumeric Squares</span> - same principle as the ciphers above, associating the alphanumeric digits 0-Z with the sequence of tetragonal (square) numbers.</span><br><br><li><span class="qgBold">Alphanumeric Case Sensitive</span> - differently from the ciphers above, this cipher expands the alphanumeric sequence so that it includes the numerals 0-9, lowercase letters a-z, and uppercase letters A-Z. It is thus identical in structure to base-62 notation, though in that notation the order of lower- and uppercase letters is usually reversed.<br><span class="qgNote">I originally called this cipher "Satanic Qabbala", since it is basically a fusion of Alphanumeric Qabbala and Satanic Gematria (see below). It was later baptized as "Alphanumeric Satanic", and later still its name was finally corrected to its current form.<br>– Blog post: <a href="https://gematriaresearch.blogspot.com/2023/06/satanic-gematria.html" target="_blank">History of Ciphers (part 7) - Satanic Gematria</a></span><br><br><li><span class="qgBold">Alphanumeric Halves</span> - inspired by <a href="http://eianorange.zenseiderz.org/gon/history.html" target="_blank">Gematria of Nothing</a>, I tried to devise an Alphanumeric cipher that also included negative values, and for me, the obvious sequence would be: first the numbers from 0 to 17, and then the negative numbers from -17 to 0, so that "Z" (the initial letter of "Zero") would correspond to 0 as well.<br><span class="qgNote">The name "Alphanumeric Halves" was devised by Mikhail, the brilliant programmer who made the original <a href="https://gematro.github.io" target="_blank">GEMATRO</a>, and fits this cipher perfectly... for obvious reasons.</span><br><br><li><span class="qgBold">Synx</span> - this cipher is quite different from the others. Itʼs based on making a direct correspondence between the 36 alphanumeric digits 0-Z and the 36 divisors of 1260, the smallest natural number that has exactly 36 divisors.</li><span class="qgNote">This cipher was originally called "Alphanumeric 1260", even though it was later changed to "Synx" due to a series of wild synchronicities involving this cipher. Perceptive readers who know the story behind it (which is still untold) will understand that this is perhaps the best and most perfect name for this cipher.</span><br><br><li><span class="qgBold">Synx fraud</span> - also called <span class="qgBold">Synx rip-off</span>, this is an experimental cipher based on the "Synx" cipher, removing Zero at the start of the alphanumeric sequence, and adding the ampersand (&) at the end.</li><span class="qgNote">As in the case of the Synx cipher, the name "Synx fraud" adds to 1260, the number on which this cipher is based.</li></span></li><br><br></ul>'

	o += '<hr class="numPropSeparator">'
	
	o += '<p class="qgMedium">Polygonal Ciphers:</p>\n<ul><p><br><i>In these ciphers, a connection is made between the 26 letters of the English alphabet and various sequences of numbers. Thus, the "Trigonal" cipher associates English letters with Trigonal numbers, "Squares" with square numbers, etc.</i><br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/11/history-of-ciphers-part-5-mathematical.html" target="_blank">History of Ciphers (part 5) - Mathematical Ciphers</a></span><br><br></ul>'
	
	o += '<hr class="numPropSeparator">'

	o += '<p class="qgMedium">Other Ciphers:</p>\n<ul><p><br><i>These ciphers donʼt share any common characteristic, so they were grouped together under the category "Other".</i><br><br><li><span class="qgBold">Kabbalistic</span> - Added by request. This cipher is related to the work of Elbert Benjamine (a.k.a. C. C. Zain), founder of the Brotherhood of Light, and it is based on a direct correspondence between English letters and the letters of the Hebrew alphabet, and assigning them the corresponding values according to Hebrew Gematria (thus "A" = hebrew letter Aleph = 1, etc).</li><span class="qgNote">There are many different ciphers for the English alphabet that are based on Hebrew Gematria, among them: Chaldean Numerology, the Kabbalistic system of Sepharial (Walter Gorn Old), Bethsheba Asheʼs English Gematria, etc. Choosing one or the other is almost always a question of personal taste, even though, if we want to be perfectionists, there are some factors that must be taken into consideration when choosing.<br>– Blog post: <a href="https://gematriaresearch.blogspot.com/2022/09/history-of-ciphers-part-6-chaldean.html" target="_blank">History of Ciphers (part 6) - Chaldean Numerology</a></span><br><br><li><span class="qgBold">Primes</span> - like "Alphanumeric Primes" and the Polygonal ciphers (see above), this cipher makes each English letter correspond to a Prime number, starting at A=2 (first prime).<br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/11/history-of-ciphers-part-5-mathematical.html" target="_blank">History of Ciphers (part 5) - Mathematical Ciphers</a></span><br><br><li><span class="qgBold">Angelic Gematria</span> - described by Michael Bertiaux in his book from 1989, <i>"The Voudon Gnostic Workbook"</i>. Itʼs based on attributing the values 5 (=A) through 30 (=Z) to the alphabet, so that for every possible throw of <i>five</i> pieces of dice, there is a corresponding letter of the English alphabet.<br><br><li><span class="qgBold">Satanic Gematria</span> - devised by Alexander Marcussen around 2008, and published in his book <i>"A Step Into The Numeric Enigma of God"</i> (2015). It begins with A=36, the 36ᵗʰ triangular number being 666, and ends with Z=61, this being the 18ᵗʰ (6+6+6) prime number. Besides, the name "Satanic Gematria" adds to 666 in the same cipher, thus making Satanic Gematria a rare example of a perfectly named cipher.<br><span class="qgNote">– Blog post: <a href="https://gematriaresearch.blogspot.com/2023/06/satanic-gematria.html" target="_blank">History of Ciphers (part 7) - Satanic Gematria</a></span><br><br><li><span class="qgBold">Prime Qabalah</span> - devised by David Rankine, and published in his book <i>"Becoming Magick: New & Revised Magicks from the New Aeon"</i> (2004).<br><br></li><li><span class="qgBold">William G. Gray</span> - this system was devised by William G. Gray and published in his book <i>"Qabalistic Concepts: Living the Tree"</i> (1997).</li><br></ul>'

	o += '<hr class="numPropSeparator">'
	
	o += '<p class="qgMedium">Extra Ciphers:</p>\n<ul><p><br><i>These ciphers donʹt fit in other categories, so I added them to the "Extra" category.</i><br><br><li><span class="qgBold">Standard Alternative & R Standard Alternative</span> - These ciphers are similar to the modern ciphers "Standard" and "Reverse Standard", except that after reaching the number 100, the sequence progresses in tens instead of hundreds (so for example, for Standard Alternative, after S=100 comes T=110, then U=120, etc, until Z=170).<br><span class="qgNote">The first source I know that mentions this cipher is Johann Henningʼs <a href="https://books.google.pt/books?id=3G7OQAAACAAJ&hl=pt-PT&pg=PA46#v=onepage&q&f=false" target="_blank">"Cabbalologia"</a> (1683). Please note that the alphabet being used in Henningʼs "Cabbalologia" is the Elizabethan English alphabet with 24 letters, so the numerical attributions will be different from the modern ciphers.</span><br><br><li><span class="qgBold">Ordinal starting at 10</span> - this is basically the same as Alphanumeric Qabbala, except that it doesnʼt include the numerals 0-9 in the cipher chart. I added this cipher for the reason that when we select Alphanumeric Qabbala, the value of a number will <i>always</i> be calculated as the sum of its digits instead of its real value (i.e. 123 = 1+2+3 instead of 123) <i>regardless of the calculation method being selected</i> (Full or Reduced). As this cipher doesnʼt include the numerals, different calculation methods will deliver different results, as intended.<br><br><li><span class="qgBold">Reverse Satanic</span> - reverses the order of the alphabet, while following the same numerical sequence (from 36 to 61) as Satanic Gematria.<br><br><li><span class="qgBold">Case Sensitive</span> & <span class="qgBold">Alt(ernating) Case Sensitive</span> - these ciphers arrange the alphabet (including both upper- and lowercase letters) in distinct ways, assigning each letter to a number between 1 and 52.</li><span class="qgNote">There is a total of 8 ways to organize the letters of the alphabet according to this scheme: please check one of my alternative online calculators, <a href="https://alektryon.github.io/gemcon" target="_blank">GemCon</a>.</span></li><br><br><li><span class="qgBold">Zeroing Key & Mirroring Key</span> - these ciphers were created by Mikhail, and use both positive and negative numbers in a symmetrical fashion.<br></span></li><br></ul>'
	
	o += '<hr class="numPropSeparator">'
	
	o += '<p class="qgMedium">Experimental Ciphers:</p>\n<ul><p><br><i>These ciphers are experimental, that is, they were devised either by me or others, so they were added to this "Experimental" category.</i><br><br><li><span class="qgBold">Elizabethan Alphanumeric</span> - This is an <i>experimental</i> cipher devised by Mikhail, the maker of the original <a href="https://gematro.github.io" target="_blank">GEMATRO</a>, and follows the same principle as Alphanumeric Qabbala, assigning the letters of the Elizabethan English alphabet specific values so that after 9 comes A=10, then B=11, etc, until Z=33 – not forgetting that I=J and U=V.<br><span class="qgNote">The name Saun gave to this cipher originally was not "Elizabethan Alphanumeric" but instead "AQ-24", since it looks like Alphanumeric Qabbala but is adapted to the 24-letter Elizabethan English alphabet. I like, however, to call it "Baconian Alphanumeric" as well, for some very specific reasons...</span><br><br><li><span class="qgBold">Elizabethan 360</span> - this <i>experimental</i> cipher makes a direct association between the 24 letters of the Elizabethan English alphabet and the 24 divisors of 360, the smallest natural number that has exactly 24 divisors.<br><br><li><span class="qgBold">Illuminati cipher</span> - this is the Gematria counterpart of the Illuminati Novice cipher, which was historically used by the Bavarian Illuminati as a cryptographic substitution cipher. It seems to be a cross between the Elizabethan Simple and Reverse ciphers.<br><span class="qgNote">Both the Illuminati cipher and the Illuminati Reverse cipher are experimental ciphers, with the latter being a simple reversal of the former.<br>– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/02/history-of-ciphers-part-1-ciphers-of.html" target="_blank">History of Ciphers (part 1) - The Ciphers of the Illuminati</a></span><br><br><li><span class="qgBold">Divisors of 1296</span> - this cipher is based on attributing the 25 divisors of 1296 <i>(the smallest natural number having exactly 25 divisors)</i> to the letters of the English alphabet. In order to achieve this, the letter "A" was given the value Zero, and then the sequence of divisors will start at B=1, then C=2, all the way through Z=1296.</span><br><br><li><span class="qgBold">Divisors of 5184</span> - similarly to the previous cipher, this cipher is based on attributing the 35 divisors of 5184 <i>(the smallest natural number having exactly 35 divisors)</i> to the alphanumeric sequence from 0 to Z. In order to achieve this, the numeral "0" was given the value Zero, and then the sequence of divisors will start at 1=1, then 2=2, all the way through Z=5184.</span><br><br><li><span class="qgBold">QWERTY</span> - Modern cipher based on the QWERTY keyboard layout.</span><br><br><li><span class="qgBold">Numeric QWERTY</span> - Modern cipher based on the QWERTY keyboard layout, but including the digits (1-0) at the start of the alphanumeric sequence.</span><br><br></li></ul>'

	o += '<hr class="numPropSeparator">'
	
	o += '<p class="qgMedium">Cryptographic Ciphers:</p>\n<ul><p><br><i>These ciphers are quite different from all the other ciphers in this calculator. While the other ciphers are used in the practice of Gematria (i.e. adding the value of the letters of a word or phrase), the Cryptographic category contains <u>substitution</u> ciphers that are used to <b>encode</b> or <b>encrypt</b> words or phrases.</i><br><br><li><span class="qgBold">Illuminati Novice</span> - This cipher was used by the Bavarian Order of the Illuminati as a cryptographic substitution cipher, in order to conceal certains words, names or phrases in their private correspondence.<br><span class="qgNote">The cipher was used in such a way that the letters were replaced by numbers; for example the name ʺSavioliʺ would have been written as ʺ18.12.20.4.14.2.4.ʺ<br>– Blog post: <a href="https://gematriaresearch.blogspot.com/2021/02/history-of-ciphers-part-1-ciphers-of.html" target="_blank">History of Ciphers (part 1) - The Ciphers of the Illuminati</a></span><br><br><li><span class="qgBold">Franz Bardon</span> - This is a cipher alphabet used by Franz Bardon to communicate spirit names to his students and friends.<br><span class="qgNote">– Further info: <a href="http://abardoncompanion.de/Stejnar.html" target="_blank">A Bardon Companion: The Discovery of Emil Stejnar</a>.<br><br></span><li><span class="qgBold">Rydumy</span> - This is quite an interesting cipher, and it was very entertaining to decode it. It was shared by John Opsopaus in 2002 in his Biblioteca Arcana website, and it was devised specifically for the Latin language.<br><span class="qgNote">In this cipher, ʺRydumyʺ translates as ʺLatinaʺ, meaning ʺLingua Latinaʺ, or the Latin language.<br>– Further info: <a href="http://opsopaus.com/OM/BA/Rydumy/Rydumy.html" target="_blank">Samples of Rydumy Language</a> by John Opsopaus.<br><br></span><li><span class="qgBold">Alfabeto Carbonaro</span> - This is a simple substitution cipher that was used by the Italian Carboneria, a secret revolutionary society that was formed in Italy and operated in several countries.<br><span class="qgNote">There isnʹt much information on this cipher in English, except a few webpages here and there that are written in Italian, so I invite my Readers to search for terms like ʺAlfabeto Carbonaroʺ, ʺCarbonariʺ and ʺCarboneriaʺ and then translate the pages using an online translator.<br>– Further info: <a href="https://en.wikipedia.org/wiki/Carbonari" target="_blank">Wikipedia article on the Italian Carbonari</a>, as well as <a href="https://it.wikipedia.org/wiki/Carboneria" target="_blank">this one</a> (in Italian), which contains a section about the Carbonari cipher.</span><br><br><li><span class="qgBold">Cryptographic AQ</span> - The cryptographic counterpart of Alphanumeric Qabbala.</span><br><br><li><span class="qgBold">Heximal AQ</span> - Another cryptographic counterpart of Alphanumeric Qabbala, but converting the values of the letters to their base6 equivalent.</span><br><br><li><span class="qgBold">English Trigon</span> - The 36 Paths, a new method (not yet shared publicly) based on the "English Trigon", or Alphanumeric Triangle.</span><br><br><li><span class="qgBold">AQ Astrology</span> - An experimental table of planetary correspondences for Alphanumeric Qabbala, based on the well-known oracle known as "AstroDice".</span><br><br></li></ul>'

	o += '<hr class="numPropSeparator">'

	o += '<p class="qgMedium">Hebrew, Greek and Arabic Ciphers:</p>\n<ul><p><br><i>Similarly to other groups of ciphers (Modern & Elizabethan English, for example), these ciphers include the Standard, Ordinal and Reduction methods of Gematria for each respective alphabet. There are only two ciphers that are different from the rest:</i><br><br><li><span class="qgBold">Hebrew Sofit</span> - this cipher includes the final (in Hebrew: סופית "sofit") values of the letters Khaph (=500), Mem (=600), Nun (=700), Phe (=800) and Tzaddi (=900).</li><span class="qgNote">– Further info: <a href="https://www.torahcalc.com/info/gematria" target="_blank">Explanations of Gematria Methods with Charts</a></span><br><br><li><span class="qgBold">Greek 24</span> - in this cipher, the obsolete letters (Vau/Digamma, Qoppa and Sampi) are discarded, and values are given to the letters based on their order in the <i>modern</i> Greek alphabet.</li><br></ul>'

	o += '<hr class="numPropSeparator">'

	o += '<p class="qgMedium">Russian Ciphers:</p>\n<ul><p><br><i>These ciphers are exactly like the Modern English ciphers, consisting of the Standard, Ordinal, Reduction, and their respective Reverse versions, but adapted to the Russian alphabet. There are only two exceptions:</i><br><br><li><span class="qgBold">Cyrillic Numerals:</span> - This is the historical table of numerical correspondences for the Cyrillic alphabet, based on Greek Isopsephy.<br><span class="qgNote">– Further info: <a href="https://en.wikipedia.org/wiki/Cyrillic_numerals" target="_blank">Cyrillic numerals (Wikipedia)</a></span><br><br><li><span class="qgBold">Glagolitic Numerals</span> - This is a <i>hypothetical</i> table of numerical correspondences for the letters of the old Glagolitic script, based on possible equivalences between the Glagolitic and Cyrillic scripts.<br><span class="qgNote">– Further info: <a href="https://en.wikipedia.org/wiki/Glagolitic_numerals" target="_blank">Glagolitic numerals (Wikipedia)</a></span></li><br></ul>'

	o += '</div>'

	$(o).appendTo('body'); // guide
	$('body').addClass('noScroll') // prevent scrolling
}

function displayDiscPanel() {
	$('<div id="darkOverlay" onclick="closePanel(&quot;.discPanel&quot;)"></div>').appendTo('body'); // overlay

	var o = '<div class="discPanel">'
	o += '<center>'
	o += '<p><span class="qgBold3">"Dedicated to the Rational Soul of the World"</span></p>'
	o += '</center>'
	
	o += '<hr class="numPropSeparator">'

	o += '<p>'
	o += '<span class="qgNote">'
	o += 'This software should not be used to promote any activities that are hateful, divisive, or harmful towards individuals or groups of people.'
	o += '<br><br>'
	o += 'In no event will the author of this software be liable for any damages arising out of or in connection with the use of this software, including but not limited to direct, indirect, consequential, and incidental damages.'
	o += '<br><br>'
	o += 'User of this software must take full responsibility for the information provided by this software and verify its accuracy before taking any actions based on it.'
	o += '<br><br>'
	o += 'This software may contain links to external websites which are not under the control of the author of this software. The author of this software is not responsible for the contents of any linked website.'
	o += '</span>'
	o += '</p>'
	
	o += '</div>'

	$(o).appendTo('body'); // guide
	$('body').addClass('noScroll') // prevent scrolling
}

function displayCipherInfoPanel(id) {
	$('<div id="darkOverlay" onclick="closePanel(&quot;.ciphInfoPanel&quot;)"></div>').appendTo('body'); // overlay

	var ciphChartVisibility = optShowCipherChart // save cipher chart visibility state
	element = document.getElementById("ChartSpot")
	if (!ciphChartVisibility) element.classList.remove("hideValue") // show the chart
	optShowCipherChart = true // temporarily allow cipher chart

	var el = '#ChartSpot' // draw Cipher Chart
	updateCipherChart(cipherList[id]) // draw requested cipher chart
	$('#spaceChartBtn').text(''); $('#backspaceChartBtn').text('') // remove space and backspace labels
	$('#ChartSpot').addClass("hideBorder") // temporarily hide border
	var sRatio = isNaN(sRatio) ? window.devicePixelRatio : optImageScale // image scaling
	if ( $(el).length ) {
		var canvas = html2canvas($(el)[0], {allowTaint: false, backgroundColor: "rgba(0,0,0,0)",
			width: $(el).outerWidth()+10, height: $(el).outerHeight()+10, scale: sRatio} )
			.then((canvas) => {
				tCanvas = trimCanvas(canvas); // trim transparent pixels
				imageDataURL = drawOutlineCanvas(tCanvas,0).toDataURL("image/png"); // draw outline, canvas to "data:image/png;base64, ..."

				var o = '<div class="ciphInfoPanel">'

				o += '<p><span class="qgNote" style="font-style:normal;">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ &#9737; /////////////////////////////////</span></p>'
				o += '<hr class="numPropSeparator">'
			
				o += '<div class="imgDataArea"><img id="imgDataDesc" src="'+imageDataURL+'"></div>'
				
				o += '<div class="ciphInfoTextArea">'
				o += cipherList[id].cipherDescription
				o += '</div>'

				o += '<hr class="numPropSeparator">'
				o += '<p><span class="qgNote" style="font-style:normal;">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ &#9737; /////////////////////////////////</span></p>'
			
				o += '</div>'

				if (!ciphChartVisibility) element.classList.add("hideValue") // undo visibility change
				optShowCipherChart = ciphChartVisibility // restore cipher chart visibility
				$('#ChartSpot').removeClass("hideBorder") // temporarily hide border
				updateWordBreakdown() // restore cipher chart of previously selected cipher

				$(o).appendTo('body'); // guide
				$('body').addClass('noScroll') // prevent scrolling
			})
	}

}

function displayContactInfo() {
	$('<div id="darkOverlay" onclick="closePanel(&quot;.contactInfo&quot;)"></div>').appendTo('body'); // overlay

	var o = '<div class="contactInfo">'
	o += '<p><span class="qgBold2">Contacts</p>'
	
	o += '<hr class="numPropSeparator">'
	
	o += '<div style="margin-top: 1em;margin-bottom: 1.25em;">This calculator that youʼre using is based entirely on the original <a class="qgLink" href="https://gematro.github.io" target="_blank">GEMATRO</a> calculator by <a class="qgLink" href="https://github.com/gematro" target="_blank">Mikhail</a>, with some changes, deletions and additions by Luís Gonçalves (<a class="qgLink" href="https://github.com/Alektryon" target="_blank">Alektryon</a>).<br></div>'
	
	o += '<hr class="numPropSeparator">'
	
	o += '<div style="margin-top: 1em;margin-bottom: 1.25em;">Send any suggestion or feedback about the original software to <a class="qgLink" href="mailto:mmiikh96@gmail.com">mmiikh96@gmail.com</a><br><i>(Mikhail, the original author of this software)</i><br><br>If you want to exchange ideas or simply want to talk with me, please use <a class="qgLink" href="mailto:qwirinus@proton.me">qwirinus@proton.me</a><br><i>(Luís Gonçalves, the owner of this ʹforkʹ of Gematro)</i></div>'
	
	o += '<hr class="numPropSeparator">'

	o += '<div style="margin-top: 1em;margin-bottom: 1.25em;"><span class="qgBold">Disclaimer:</span><br><br>Let it be made perfectly clear that Mikhail, the author of the original "GEMATRO" software, has no association whatsoever with me (Luís Gonçalves) or with this edited version of his <i>open-source</i> software.</span></div>'
	
	o += '<hr class="numPropSeparator">'
	
	o += '<div style="margin-top: 1em;">If you enjoy my blog <a href="https://gematriaresearch.blogspot.com" target="_blank">Gematria Research</a> and want to further support my work, I will greatly appreciate if you consider a donation. Thanks in advance! &#128522;</div>'

	o += '<br><span class="qgAddr"><a class="qgLink" href="https://paypal.me/alektryon">PayPal.me/Alektryon</a></span><br><br><br>'

	o += '</div>'

	$(o).appendTo('body'); // guide
	$('body').addClass('noScroll') // prevent scrolling
}