'use client'

import Image from "next/image"
import Link from "next/link"
import styles from "./postDetails.module.scss"
import { notFound } from 'next/navigation';
import { useEffect } from "react";
import SidePost from "./SidePost";

export default function PostDetails(props) {
  const { post, seminars } = props

  useEffect(() => {
    if (!!post) {
      if (!document.getElementById('toc')) {
        var h2 = document.getElementsByTagName('h2');
        if (!!h2[0]) {
          h2[0].insertAdjacentHTML('beforebegin', `<div id='toc'><input id="hide-toc" type="checkbox" checked=""><label for='hide-toc' id='toc-header'><span>目次</span></label><div id='toc-content'></div></div>`);
          var documentRef = documentRef || document;
          var toc = documentRef.getElementById('toc-content');
          var headings = [].slice.call(documentRef.body.querySelectorAll('h2'));
          headings.forEach(function (heading, index) {
            var anchor = documentRef.createElement('a');
            anchor.setAttribute('name', 'toc' + index);
            anchor.setAttribute('id', 'toc' + index);
            anchor.setAttribute('class', 'scroll-anchor');

            var link = documentRef.createElement('a');
            link.setAttribute('href', '#toc' + index);
            link.textContent = heading.textContent;

            var div = documentRef.createElement('div');
            div.setAttribute('class', "toc-" + heading.tagName.toLowerCase());

            div.appendChild(link);
            toc.appendChild(div);
            heading.parentNode.insertBefore(anchor, heading);
          });
        }
      }

      //   var documentRef = documentRef || document;
      //   var post_node = document.getElementsByClassName('post-content');
      //   var toc_node = documentRef.getElementById('toc')
      //   var toc = documentRef.getElementById('toc-content')
      //   if (!toc_node) {
      //     post_node[0].insertAdjacentHTML('beforebegin', `<div id='toc'><input id="hide-toc" type="checkbox" checked=""><label for='hide-toc' id='toc-header'><span>目次</span></label><div id='toc-content'></div></div>`);
      //     toc = documentRef.getElementById('toc-content');
      //   } else {
      //     toc.innerHTML = ''
      //   }
      //   var headings = [].slice.call(documentRef.body.querySelectorAll('.post-content h2'));
      //   headings.forEach(function (heading, index) {
      //     var anchor = documentRef.createElement('a');
      //     anchor.setAttribute('name', 'toc' + index);
      //     anchor.setAttribute('id', 'toc' + index);
      //     anchor.setAttribute('class', 'scroll-anchor');

      //     var link = documentRef.createElement('a');
      //     link.setAttribute('href', '#toc' + index);
      //     link.textContent = heading.textContent;

      //     var div = documentRef.createElement('div');
      //     div.setAttribute('class', heading.tagName.toLowerCase());

      //     div.appendChild(link);
      //     toc.appendChild(div);
      //     heading.parentNode.insertBefore(anchor, heading);
      //   });
    }
  }, [post])

  return (
    <section className={styles.postDetailsContainer}>
      <div className="">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className='post-content post' dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
          <div className="col-12 col-lg-3">
            <SidePost
              seminars={seminars}
            />
          </div>
        </div>
      </div>
    </section >
  );
}