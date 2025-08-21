import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

function ProjectCards(props) {
  return (
    <div className="rounded-lg shadow-lg bg-gry-800 p-6 border border-gray-700 mt-6 w-100 ">
      <img
        className="rounded-t-lg w-100 mb-4"
        src={props.imgPath}
        alt="card-img"
      />

      <div className="p-4">
        <h4 className="text-white font-bold text-xl mb-4">{props.title}</h4>
        <p className="text-gray-400 text-justify text-sm mb-4">
          {props.description}
        </p>
        <div className="flex flex-wrap justify-evenly">
          <a
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 ease-in-out"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="text-lg" />
            {props.isBlog ? 'Blog' : 'GitHub'}
          </a>

          {!props.isBlog && props.demoLink && (
            <a
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 ease-in-out"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite className="text-lg" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
