import React from 'react';
import {
  Svg, G, Path, Defs
} from 'react-native-svg';

const ICONS = {
  firstLikeGiven: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M36 19.417C37.744 17.324 40.416 16 43.2 16c4.928 0 8.8 3.956 8.8 8.992 0 6.18-5.44 11.215-13.68 18.866L36 46V19.417zm5.867 4.02c1.846-.433 3.166 1.064 3.04 2.75-.068.924.565 1.733 1.414 1.807.849.075 1.593-.613 1.661-1.537.281-3.795-2.756-7.24-6.764-6.3-.833.194-1.362 1.086-1.183 1.992.179.906 1 1.482 1.832 1.288z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M36 46l-2.32-2.158C25.44 36.207 20 31.172 20 24.992 20 19.956 23.872 16 28.8 16c2.784 0 5.456 1.324 7.2 3.417C37.744 17.324 40.416 16 43.2 16c4.928 0 8.8 3.956 8.8 8.992 0 6.18-5.44 11.215-13.68 18.866L36 46zm5.867-22.563c1.846-.433 3.166 1.064 3.04 2.75-.068.924.565 1.733 1.414 1.807.849.075 1.593-.613 1.661-1.537.281-3.795-2.756-7.24-6.764-6.3-.833.194-1.362 1.086-1.183 1.992.179.906 1 1.482 1.832 1.288z"
          fill="#FFF"
        />
        <Path
          d="M36 19.417C37.744 17.324 40.416 16 43.2 16c4.928 0 8.8 3.956 8.8 8.992 0 6.18-5.44 11.215-13.68 18.866L36 46V19.417zm5.867 4.02c1.846-.433 3.166 1.064 3.04 2.75-.068.924.565 1.733 1.414 1.807.849.075 1.593-.613 1.661-1.537.281-3.795-2.756-7.24-6.764-6.3-.833.194-1.362 1.086-1.183 1.992.179.906 1 1.482 1.832 1.288z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  firstMessageSent: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M36 26.56V20h19a2 2 0 0 1 1.992 1.824L43 32.08l-7-5.52zM36 40v-9.43l6.015 4.731c.58.44 1.39.44 1.97 0L57 25.741V38a2 2 0 0 1-2 2H36z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M56.992 21.824L43 32.08l-13.824-10.9A2 2 0 0 1 31 20h24a2 2 0 0 1 1.992 1.824zM57 25.742V38a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2V25.063l13.015 10.238c.58.44 1.39.44 1.97 0L57 25.741zM18.8 31c-.994 0-1.8-.672-1.8-1.5s.806-1.5 1.8-1.5h4.545c.995 0 1.8.672 1.8 1.5s-.805 1.5-1.8 1.5H18.8zm-3.639-7C13.968 24 13 23.328 13 22.5s.968-1.5 2.161-1.5h7.641c1.194 0 2.162.672 2.162 1.5s-.968 1.5-2.162 1.5h-7.64zm6.142 14c-.72 0-1.303-.672-1.303-1.5s.583-1.5 1.303-1.5h2.63c.72 0 1.303.672 1.303 1.5s-.583 1.5-1.302 1.5h-2.631z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M36 26.56V20h19a2 2 0 0 1 1.992 1.824L43 32.08l-7-5.52zM36 40v-9.43l6.015 4.731c.58.44 1.39.44 1.97 0L57 25.741V38a2 2 0 0 1-2 2H36z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  firstMessageReceived: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M36 26.56V20h5a2 2 0 0 1 1.824 1.178L36 26.56zM36 40v-9.43l7-5.507V38a2 2 0 0 1-2 2h-5zm17.2-9h-4.545c-.995 0-1.8-.672-1.8-1.5s.805-1.5 1.8-1.5H53.2c.994 0 1.8.672 1.8 1.5s-.806 1.5-1.8 1.5zm3.639-7h-7.641c-1.194 0-2.162-.672-2.162-1.5s.968-1.5 2.162-1.5h7.64c1.194 0 2.162.672 2.162 1.5s-.968 1.5-2.161 1.5zm-6.142 14h-2.63c-.72 0-1.303-.672-1.303-1.5s.583-1.5 1.302-1.5h2.631c.72 0 1.303.672 1.303 1.5s-.583 1.5-1.303 1.5z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M15.008 21.824L29 32.08l13.824-10.9A2 2 0 0 0 41 20H17a2 2 0 0 0-1.992 1.824zM15 25.742V38a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V25.063L29.985 35.301c-.58.44-1.39.44-1.97 0L15 25.741zM53.2 31c.994 0 1.8-.672 1.8-1.5s-.806-1.5-1.8-1.5h-4.545c-.995 0-1.8.672-1.8 1.5s.805 1.5 1.8 1.5H53.2zm3.639-7C58.032 24 59 23.328 59 22.5s-.968-1.5-2.161-1.5h-7.641c-1.194 0-2.162.672-2.162 1.5s.968 1.5 2.162 1.5h7.64zm-6.142 14c.72 0 1.303-.672 1.303-1.5s-.583-1.5-1.303-1.5h-2.63c-.72 0-1.303.672-1.303 1.5s.583 1.5 1.302 1.5h2.631z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M36 26.56V20h5a2 2 0 0 1 1.824 1.178L36 26.56zM36 40v-9.43l7-5.507V38a2 2 0 0 1-2 2h-5zm17.2-9h-4.545c-.995 0-1.8-.672-1.8-1.5s.805-1.5 1.8-1.5H53.2c.994 0 1.8.672 1.8 1.5s-.806 1.5-1.8 1.5zm3.639-7h-7.641c-1.194 0-2.162-.672-2.162-1.5s.968-1.5 2.162-1.5h7.64c1.194 0 2.162.672 2.162 1.5s-.968 1.5-2.161 1.5zm-6.142 14h-2.63c-.72 0-1.303-.672-1.303-1.5s.583-1.5 1.302-1.5h2.631c.72 0 1.303.672 1.303 1.5s-.583 1.5-1.303 1.5z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  firstPost: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M36 37.279V24.254l1.603-1.702 6.176 6.471L36 37.28zm14.871-17.313a1.8 1.8 0 0 1-.359 1.91l-4.259 4.521-4.14-4.337-2.122-2.08 1.024-1.05 3.147-3.338a1.8 1.8 0 0 1 2.198-.332 1.8 1.8 0 0 1 .45.325l3.58 3.536c.243.24.404.535.481.845z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M50.871 19.966a1.8 1.8 0 0 1-.359 1.91l-4.259 4.521-4.14-4.337-2.122-2.08 1.024-1.05 3.147-3.338a1.8 1.8 0 0 1 2.198-.332 1.8 1.8 0 0 1 .45.325l3.58 3.536c.243.24.404.535.481.845zm-7.092 9.057L28.842 44.876 21 46.024l1.592-7.54 15.01-15.932 6.177 6.471z"
          fill="#FFF"
        />
        <Path
          d="M36 37.279V24.254l1.603-1.702 6.176 6.471L36 37.28zm14.871-17.313a1.8 1.8 0 0 1-.359 1.91l-4.259 4.521-4.14-4.337-2.122-2.08 1.024-1.05 3.147-3.338a1.8 1.8 0 0 1 2.198-.332 1.8 1.8 0 0 1 .45.325l3.58 3.536c.243.24.404.535.481.845z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  firstRecognitionReceived: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M55.2 31.159a1.8 1.8 0 1 0 0-3.6h-4.545a1.8 1.8 0 1 0 0 3.6H55.2zm-6.364-9.229a1.8 1.8 0 1 0 0-3.6h-6.363a1.8 1.8 0 1 0 0 3.6h6.363zm.819 18.457a1.8 1.8 0 0 0 0-3.6h-3.637a1.8 1.8 0 1 0 0 3.6h3.637zm-19.761-.215l6.351 3.754A1.8 1.8 0 0 0 38.96 42.3l-.313-7.418 5.539-4.935a1.8 1.8 0 0 0-.713-3.078l-7.118-1.986-2.94-6.791a1.8 1.8 0 0 0-3.154-.276l-4.074 6.177-7.354.72a1.8 1.8 0 0 0-1.237 2.908l4.598 5.821-1.597 7.252a1.8 1.8 0 0 0 2.39 2.072l6.908-2.594z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M36 24.064l.354.819 7.118 1.986a1.8 1.8 0 0 1 .713 3.078l-5.54 4.935.314 7.418a1.8 1.8 0 0 1-2.714 1.626L36 43.78V24.064zm19.2 7.095h-4.545a1.8 1.8 0 1 1 0-3.6H55.2a1.8 1.8 0 0 1 0 3.6zm-6.364-9.229h-6.363a1.8 1.8 0 1 1 0-3.6h6.363a1.8 1.8 0 1 1 0 3.6zm.819 18.457h-3.637a1.8 1.8 0 0 1 0-3.6h3.637a1.8 1.8 0 1 1 0 3.6z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  firstRecognitionSent: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M16.8 31.159a1.8 1.8 0 1 1 0-3.6h4.545a1.8 1.8 0 1 1 0 3.6H16.8zm6.364-9.229a1.8 1.8 0 1 1 0-3.6h6.363a1.8 1.8 0 1 1 0 3.6h-6.363zm-.819 18.457a1.8 1.8 0 0 1 0-3.6h3.637a1.8 1.8 0 1 1 0 3.6h-3.637zm19.761-.215l-6.351 3.754A1.8 1.8 0 0 1 33.04 42.3l.313-7.418-5.539-4.935a1.8 1.8 0 0 1 .713-3.078l7.118-1.986 2.94-6.791a1.8 1.8 0 0 1 3.154-.276l4.074 6.177 7.354.72a1.8 1.8 0 0 1 1.237 2.908l-4.598 5.821 1.597 7.252a1.8 1.8 0 0 1-2.39 2.072l-6.908-2.594z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M36 43.78V24.065l2.585-5.972a1.8 1.8 0 0 1 3.155-.276l4.074 6.177 7.354.72a1.8 1.8 0 0 1 1.237 2.908l-4.598 5.821 1.597 7.252a1.8 1.8 0 0 1-2.39 2.072l-6.908-2.594L36 43.78z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  firstRewardReceived: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M36 29h14v17a2 2 0 0 1-2 2H36V29zm0-4V14.515c.154-.211.33-.406.528-.579 2.501-2.174 5.997-2.247 7.809-.162 1.212 1.394 1.363 3.4.582 5.226H50a2 2 0 0 1 2 2v4H36zm1.974-6h3.381c1.126-1.132 1.316-2.57.718-3.258-.638-.733-2.244-.7-3.577.458-.281.245-.53 1.121-.53 2.405 0 .131.003.263.008.395z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M28 29v19h-4a2 2 0 0 1-2-2V29h6zm4 0h18v17a2 2 0 0 1-2 2H32V29zm12.919-10H50a2 2 0 0 1 2 2v4H20v-4a2 2 0 0 1 2-2h4.698c-.78-1.826-.63-3.832.582-5.226 1.812-2.085 5.308-2.012 7.809.162.287.25.524.543.72.867.195-.324.433-.617.72-.867 2.5-2.174 5.996-2.247 7.808-.162 1.212 1.394 1.363 3.4.582 5.226zm-6.945 0h3.381c1.126-1.132 1.316-2.57.718-3.258-.638-.733-2.244-.7-3.577.458-.281.245-.53 1.121-.53 2.405 0 .131.003.263.008.395zm-4.33 0c.004-.132.007-.264.007-.395 0-1.284-.249-2.16-.53-2.405-1.333-1.158-2.94-1.191-3.577-.458-.597.687-.408 2.126.718 3.258h3.381z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M36 29h14v17a2 2 0 0 1-2 2H36V29zm0-4V14.515c.154-.211.33-.406.528-.579 2.501-2.174 5.997-2.247 7.809-.162 1.212 1.394 1.363 3.4.582 5.226H50a2 2 0 0 1 2 2v4H36zm1.974-6h3.381c1.126-1.132 1.316-2.57.718-3.258-.638-.733-2.244-.7-3.577.458-.281.245-.53 1.121-.53 2.405 0 .131.003.263.008.395z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  hatchling: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M36 12.017c.618.353.989.723 1.23 1.058C37.665 13.679 38 11 39 12c0 1 .089 2.596.603 2.855A8 8 0 0 1 44 22c0 1.94-.69 3.72-1.84 5.105-.353.425.86 1.514 1.81 2.976l3.36.01c.434 1.821.67 3.521.67 4.909 0 6.627-5.373 13-12 13V12.017zM39 24c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M28.182 30.03c.95-1.27 2.013-2.5 1.673-2.908a8.003 8.003 0 0 1 4.22-12.89c0 .001 0-1.232-1.075-3.232 2.674.535 3.73 1.38 4.23 2.075C37.665 13.679 38 11 39 12c0 1 .089 2.596.603 2.855A8 8 0 0 1 44 22c0 1.94-.69 3.72-1.84 5.105-.353.425.86 1.514 1.81 2.976l3.36.01c.434 1.821.67 3.521.67 4.909 0 6.627-5.373 13-12 13s-12-6.373-12-13c0-1.406-.121-1.623.686-4.981l3.496.011zM39 24c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5zm-6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M36 12.017c.618.353.989.723 1.23 1.058C37.665 13.679 38 11 39 12c0 1 .089 2.596.603 2.855A8 8 0 0 1 44 22c0 1.94-.69 3.72-1.84 5.105-.353.425.86 1.514 1.81 2.976l3.36.01c.434 1.821.67 3.521.67 4.909 0 6.627-5.373 13-12 13V12.017zM39 24c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  learning: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M36 48V13c.183 0 .365.05.525.153l19.029 12.112c.266.17.42.445.443.735h.238v12.18c1.58.333 2.765 1.716 2.765 3.372C59 43.456 57.433 45 55.5 45S52 43.456 52 41.552c0-1.656 1.185-3.039 2.765-3.372V27.446l-6.326 4.513v8.226a.96.96 0 0 1-.464.82L36.49 47.86a.978.978 0 0 1-.49.14z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M55.997 26h.238v12.18c1.58.333 2.765 1.716 2.765 3.372C59 43.456 57.433 45 55.5 45S52 43.456 52 41.552c0-1.656 1.185-3.039 2.765-3.372V27.446l-6.326 4.513v8.226a.96.96 0 0 1-.464.82L36.49 47.86a.98.98 0 0 1-.989.014l-11.84-6.853a.96.96 0 0 1-.49-.835l.019-8.967-6.748-4.338a.956.956 0 0 1 .004-1.615l19.029-12.112a.98.98 0 0 1 1.05 0l19.029 12.112c.266.17.42.445.443.735z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M36 48V13c.183 0 .365.05.525.153l19.029 12.112c.266.17.42.445.443.735h.238v12.18c1.58.333 2.765 1.716 2.765 3.372C59 43.456 57.433 45 55.5 45S52 43.456 52 41.552c0-1.656 1.185-3.039 2.765-3.372V27.446l-6.326 4.513v8.226a.96.96 0 0 1-.464.82L36.49 47.86a.978.978 0 0 1-.49.14z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  chick: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M32 44.98V11.017c.618.353.989.723 1.23 1.058C33.665 12.679 34 10 35 11c0 1 .089 2.596.603 2.855A8 8 0 0 1 40 21c0 1.94-.69 3.72-1.84 5.105-.26.312.327.983 1.034 1.897 1.297.062 2.719 1.432 4.265 4.11 2.765 4.788 3 6 2 7-.667.666-1.614.666-2.841 0-.106.666-.492 1-1.159 1-.571 0-1.142-.327-1.527-.607-.749 1.525-1.852 2.857-3.182 3.825v3.36l2.155 2.155-1.06 1.06-2-2-2 2-1.061-1.06 2.466-2.466v-2.161a7.972 7.972 0 0 1-3.25.762zM35 23c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd" transform="translate(4)">
        <Path
          d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
          fill="#000"
        />
        <Path
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
          fill="#313130"
        />
        <Path
          d="M35.25 44.218a7.957 7.957 0 0 1-3.372.763 7.706 7.706 0 0 1-3.128-.667v2.375l2.155 2.156-1.06 1.06-2-2-2 2-1.061-1.06 2.466-2.466v-2.922c-1.453-1.036-2.624-2.526-3.366-4.238-.29.258-1.087.893-1.884.893-.667 0-1.053-.334-1.159-1-1.227.666-2.174.666-2.841 0-1-1-.765-2.212 2-7 1.765-3.057 3.368-4.41 4.81-4.057.735-.908 1.35-1.567 1.045-1.933a8.003 8.003 0 0 1 4.22-12.89c0 .001 0-1.232-1.075-3.232 2.674.535 3.73 1.38 4.23 2.075C33.665 12.679 34 10 35 11c0 1 .089 2.596.603 2.855A8 8 0 0 1 40 21c0 1.94-.69 3.72-1.84 5.105-.26.312.327.983 1.034 1.897 1.297.062 2.719 1.432 4.265 4.11 2.765 4.788 3 6 2 7-.667.666-1.614.666-2.841 0-.106.666-.492 1-1.159 1-.571 0-1.142-.327-1.527-.607-.749 1.525-1.852 2.857-3.182 3.825v3.36l2.155 2.155-1.06 1.06-2-2-2 2-1.061-1.06 2.466-2.466v-2.161zM35 23c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5zm-6 0c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M32 44.98V11.017c.618.353.989.723 1.23 1.058C33.665 12.679 34 10 35 11c0 1 .089 2.596.603 2.855A8 8 0 0 1 40 21c0 1.94-.69 3.72-1.84 5.105-.26.312.327.983 1.034 1.897 1.297.062 2.719 1.432 4.265 4.11 2.765 4.788 3 6 2 7-.667.666-1.614.666-2.841 0-.106.666-.492 1-1.159 1-.571 0-1.142-.327-1.527-.607-.749 1.525-1.852 2.857-3.182 3.825v3.36l2.155 2.155-1.06 1.06-2-2-2 2-1.061-1.06 2.466-2.466v-2.161a7.972 7.972 0 0 1-3.25.762zM35 23c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  newbie: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M36 33.026l1.497 1.477A.712.712 0 0 0 38.5 34.5a.862.862 0 0 0 .108-1.088L36 29.504V14.632c6.627 0 12 13.74 12 20.368 0 6.627-5.373 13-12 13V33.026z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(4)">
          <Path
            d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#000"
          />
          <Path
            d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
            fill="#313130"
          />
        </G>
        <Path
          d="M36 48c6.627 0 12-6.373 12-13s-5.373-20.368-12-20.368c-1.444 0-2.829.652-4.111 1.741L34.24 20.6a1 1 0 0 1 .065.831l-1.135 3.093a1 1 0 0 0 .106.9l5.332 7.989A.862.862 0 0 1 38.5 34.5a.712.712 0 0 1-1.003.003l-7.557-7.458a2 2 0 0 1-.363-2.36l1.073-2.024a1 1 0 0 0-.185-1.184c-1.053-1.028-1.58-1.54-1.584-1.535C25.92 24.533 24 31.038 24 35c0 6.627 5.373 13 12 13z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M36 33.026l1.497 1.477A.712.712 0 0 0 38.5 34.5a.862.862 0 0 0 .108-1.088L36 29.504V14.632c6.627 0 12 13.74 12 20.368 0 6.627-5.373 13-12 13V33.026z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  ),
  chicken: size => (
    <Svg height={size} width={size} viewBox="0 0 72 72">
      <Defs>
        <Path
          id="a"
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
        />
        <Path
          id="b"
          d="M32 7.778A6.162 6.162 0 0 1 35 7v3c1.606-1.446 3.265-2.113 4.979-2-.717 1.333-.71 2.333.021 3 2 .667 3 1.667 3 3 0 2 0 3-2.048 4-1.21.591-2.965-.378-4.143 0 .86 1.101 1.914 1.516 3.136 3.17 3.695 5 .25 17.83 8.847 19.83-3.4 3.346-8.998 6.71-16.792 10.092V7.778z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd" transform="translate(4)">
        <Path
          d="M4 0h56a4 4 0 0 1 4 4v47.249a4 4 0 0 1-1.979 3.452l-28 16.397a4 4 0 0 1-4.042 0l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
          fill="#000"
        />
        <Path
          d="M4 0h28v71.646a3.997 3.997 0 0 1-2.021-.548l-28-16.397A4 4 0 0 1 0 51.249V4a4 4 0 0 1 4-4z"
          fill="#313130"
        />
        <Path
          d="M27 9c0 .667.333 1.667 1 3 2-3.333 4.333-5 7-5v3c1.606-1.446 3.265-2.113 4.979-2-.717 1.333-.71 2.333.021 3 2 .667 3 1.667 3 3 0 2 0 3-2.048 4-1.21.591-2.965-.378-4.143 0 .86 1.101 1.914 1.516 3.136 3.17 3.695 5 .25 17.83 8.847 19.83-4.064 4-11.268 8.025-21.61 12.075C20.394 45.692 17.333 40.667 18 38c1-4 1.328-4.17 3-7 0 .037-2-.83-2-3 .335-4 6.308-3.17 5-6l-7-2c1.868-.993 3.202-1.66 4-2 1.123-.479 3-1 3-1 0-2-.51-4 1-6 .629-.833 1.531-2.112 2-2zm3 11c1.38 0 2-.672 2-1.5s-.62-1.5-2-1.5-3 1-3 1.5 1.62 1.5 3 1.5z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Path
          d="M32 7.778A6.162 6.162 0 0 1 35 7v3c1.606-1.446 3.265-2.113 4.979-2-.717 1.333-.71 2.333.021 3 2 .667 3 1.667 3 3 0 2 0 3-2.048 4-1.21.591-2.965-.378-4.143 0 .86 1.101 1.914 1.516 3.136 3.17 3.695 5 .25 17.83 8.847 19.83-3.4 3.346-8.998 6.71-16.792 10.092V7.778z"
          fill="#1D1D1B"
          fillOpacity=".1"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  )
};

export default ({ badge, size = 72 }) => (ICONS[badge] ? ICONS[badge](size) : null);
