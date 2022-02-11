(()=>{"use strict";const e=document.querySelectorAll(".hover"),t=document.querySelectorAll(".project"),o=document.querySelectorAll("section[id]");function r(e){const t=e.target;t&&(t.parentNode.querySelector(".interest-img").style.display="inline")}function n(e){const t=e.target;t&&(t.parentNode.querySelector(".interest-img").style.display="none")}function i(e){const t=e.target.querySelector(".project-gif");t&&(t.style.visibility="visible",t.style.opacity="100%")}function c(e){const t=e.target.querySelector(".project-gif");t&&(t.style.visibility="hidden",t.style.opacity="0%")}window.addEventListener("scroll",(function(){let e=window.pageYOffset;o.forEach((t=>{const o=t,r=o.offsetHeight,n=o.offsetTop-250,i=t.getAttribute("id");e>n&&e<=n+r?document.querySelector(`.nav-link[href*="${i}"]`).classList.add("current"):document.querySelector(`.nav-link[href*="${i}"]`).classList.remove("current")}))})),e.forEach((e=>e.addEventListener("mouseover",r))),e.forEach((e=>e.addEventListener("mouseout",n))),t.forEach((e=>e.addEventListener("mouseenter",c))),t.forEach((e=>e.addEventListener("mouseleave",i)))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFFQSxNQUFNQSxFQUFhQyxTQUFTQyxpQkFBaUIsVUFDdkNDLEVBQVVGLFNBQVNDLGlCQUFpQixZQUNwQ0UsRUFBV0gsU0FBU0MsaUJBQWlCLGVBRTNDLFNBQVNHLEVBQVFDLEdBQ2YsTUFBTUMsRUFBYUQsRUFBRUMsT0FDakJBLElBQ2VBLEVBQWlCLFdBQUVDLGNBQWMsaUJBQzlDQyxNQUFNQyxRQUFVLFVBSXhCLFNBQVNDLEVBQVFMLEdBQ2YsTUFBTUMsRUFBYUQsRUFBRUMsT0FDakJBLElBQ2VBLEVBQWlCLFdBQUVDLGNBQWMsaUJBQzlDQyxNQUFNQyxRQUFVLFFBSXhCLFNBQVNFLEVBQVFOLEdBQ2YsTUFDTU8sRUFEYVAsRUFBRUMsT0FDU0MsY0FBYyxnQkFDeENLLElBQ0ZBLEVBQVdKLE1BQU1LLFdBQWEsVUFDOUJELEVBQVdKLE1BQU1NLFFBQVUsUUFJL0IsU0FBU0MsRUFBUVYsR0FDZixNQUNNTyxFQURhUCxFQUFFQyxPQUNTQyxjQUFjLGdCQUN4Q0ssSUFDRkEsRUFBV0osTUFBTUssV0FBYSxTQUM5QkQsRUFBV0osTUFBTU0sUUFBVSxNQXlCL0JFLE9BQU9DLGlCQUFpQixVQXBCeEIsV0FFRSxJQUFJQyxFQUFVRixPQUFPRyxZQUVyQmhCLEVBQVNpQixTQUFRQyxJQUNmLE1BQU1DLEVBQStCRCxFQUMvQkUsRUFBZ0JELEVBQWVFLGFBQy9CQyxFQUFhSCxFQUFlSSxVQUFZLElBQ3hDQyxFQUFZTixFQUFRTyxhQUFhLE1BR25DVixFQUFVTyxHQUFjUCxHQUFXTyxFQUFhRixFQUN4Q3ZCLFNBQVNPLGNBQWMsb0JBQW9Cb0IsT0FBZ0JFLFVBQVVDLElBQUksV0FFekU5QixTQUFTTyxjQUFjLG9CQUFvQm9CLE9BQWdCRSxVQUFVRSxPQUFPLGlCQU81RmhDLEVBQVdxQixTQUFRWSxHQUFRQSxFQUFLZixpQkFBaUIsWUFBYWIsS0FDOURMLEVBQVdxQixTQUFRWSxHQUFRQSxFQUFLZixpQkFBaUIsV0FBWVAsS0FDN0RSLEVBQVFrQixTQUFRbEIsR0FBV0EsRUFBUWUsaUJBQWlCLGFBQWNGLEtBQ2xFYixFQUFRa0IsU0FBUWxCLEdBQVdBLEVBQVFlLGlCQUFpQixhQUFjTixNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc2Fzcy9tYWluLnNjc3NcIjtcblxuY29uc3QgaG92ZXJUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3ZlcicpO1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb25baWRdJyk7XG5cbmZ1bmN0aW9uIHNob3dJbWcoZTogRXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0OmFueSA9IGUudGFyZ2V0O1xuICBpZiAodGFyZ2V0KSB7XG4gICAgY29uc3QgaW1nOmFueSA9ICh0YXJnZXQucGFyZW50Tm9kZSkucXVlcnlTZWxlY3RvcignLmludGVyZXN0LWltZycpO1xuICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUltZyhlOiBFdmVudCkge1xuICBjb25zdCB0YXJnZXQ6YW55ID0gZS50YXJnZXQ7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBjb25zdCBpbWc6YW55ID0gKHRhcmdldC5wYXJlbnROb2RlKS5xdWVyeVNlbGVjdG9yKCcuaW50ZXJlc3QtaW1nJyk7XG4gICAgaW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0dpZihlOiBFdmVudCkge1xuICBjb25zdCB0YXJnZXQ6YW55ID0gZS50YXJnZXQ7XG4gIGNvbnN0IGdpZkVsZW1lbnQ6YW55ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdpZicpXG4gIGlmIChnaWZFbGVtZW50KSB7XG4gICAgZ2lmRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGdpZkVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxMDAlJztcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlR2lmKGU6IEV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldDphbnkgPSBlLnRhcmdldDtcbiAgY29uc3QgZ2lmRWxlbWVudDphbnkgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ2lmJylcbiAgaWYgKGdpZkVsZW1lbnQpIHtcbiAgICBnaWZFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBnaWZFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCUnO1xuICB9XG59XG5cbi8vaGlnaGxpZ2h0aW5nIG5hdiBlbGVtZW50IHdoZW4gY29udGVudCBpcyBzaG93blxuZnVuY3Rpb24gbmF2SGlnaGxpZ2h0ZXIoKSB7XG4gIC8vY3VycmVudCBzY3JvbGwgcG9zXG4gIGxldCBzY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gIHNlY3Rpb25zLmZvckVhY2goY3VycmVudCA9PiB7XG4gICAgY29uc3QgY3VycmVudFNlY3Rpb246YW55ID0gKDxFbGVtZW50PmN1cnJlbnQpXG4gICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IGN1cnJlbnRTZWN0aW9uLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBzZWN0aW9uVG9wID0gY3VycmVudFNlY3Rpb24ub2Zmc2V0VG9wIC0gMjUwO1xuICAgIGNvbnN0IHNlY3Rpb25JZCA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuXG4gICAgLy9jb21wYXJlXG4gICAgaWYgKHNjcm9sbFkgPiBzZWN0aW9uVG9wICYmIHNjcm9sbFkgPD0gc2VjdGlvblRvcCArIHNlY3Rpb25IZWlnaHQpIHtcbiAgICAgICg8RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmF2LWxpbmtbaHJlZio9XCIke3NlY3Rpb25JZH1cIl1gKSkuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoPEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdi1saW5rW2hyZWYqPVwiJHtzZWN0aW9uSWR9XCJdYCkpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICB9XG4gIH0pXG59XG5cbi8vbGlzdGVuIGZvciBzY3JvbGxcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBuYXZIaWdobGlnaHRlcik7XG5ob3ZlclRleHRzLmZvckVhY2godGV4dCA9PiB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHNob3dJbWcpKTtcbmhvdmVyVGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHRleHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoaWRlSW1nKSk7XG5wcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoaWRlR2lmKSk7XG5wcm9qZWN0LmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBzaG93R2lmKSk7Il0sIm5hbWVzIjpbImhvdmVyVGV4dHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcm9qZWN0Iiwic2VjdGlvbnMiLCJzaG93SW1nIiwiZSIsInRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJoaWRlSW1nIiwic2hvd0dpZiIsImdpZkVsZW1lbnQiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImhpZGVHaWYiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0IiwiZm9yRWFjaCIsImN1cnJlbnQiLCJjdXJyZW50U2VjdGlvbiIsInNlY3Rpb25IZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzZWN0aW9uVG9wIiwib2Zmc2V0VG9wIiwic2VjdGlvbklkIiwiZ2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=