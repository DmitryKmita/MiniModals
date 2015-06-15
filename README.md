# MiniModals
A really small custom implementation of modals in JS. Made for my personal needs, tried a lot of other scripts, but they are either too big, or do not have functionality I needed or was hard to implement easy things.

I could make this library non-dependency (and maybe I'll do), but at this moment it needs jQuery, Font-Awesome to run.

 How to run:
 1. Add jquery&font-awesome to your code.
 2. Import library to your code.
 3. Add library stylesheets (they can be rewritten as you wish, because they are very simple).
 4. To create simple modal with content - run modal.openModal(content),
 5. If you need to open modal and take content from ajax - run modal.openAjaxModal(url, data, trigger).
 5.1 URL - is the url for ajax request,
 5.2 DATA - is the data to pass to request
 5.3 TRIGGER - callback to initialize any events on elements loaded.
 6. If you need to close the modal - run modal.closeModal();

I do not say that this implementation is good or bad. I just created it because needed fast solution for small functionality.